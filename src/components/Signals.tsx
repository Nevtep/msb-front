import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Link } from 'gatsby';
import { Box } from '@material-ui/core';
import { baseTheme } from '../assets/theme';
import SignalsList from './SignalsList';
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { GET_SIGNALS } from '../queries/getSignals';
import MessageList from './MessageList';
import { VIP_MESSAGES, VIP_SIGNALS } from '../subscriptions';

const NotSubscribed = () => (<section id="senales" className="main gradient-section">
<div className="grid-wrapper">
    <div className="col-12">
        <header className="major">
            <h2>Señales Binarias</h2>
        </header>
        <h3>Más de cincuenta señales diarias</h3>
        <p>Diariamente obtendrás señales de ingreso al mercado de opciones binarias, exclusiva información que facilitara tu operatoria. También tendrás accesos a video llamadas para responder dudas y facilitar el camino al éxito y a una nueva forma de vida.</p>
        <ul className="actions">
            <li><Link to="/app/billing" className="button">Subscríbete</Link></li>
        </ul>
    </div>
</div>
</section>);

export const Signals: React.FC<RouteComponentProps> = () => {
    const [messages, setMessages] = useState([]);
    const [news, setNews] = useState([]);

    const { data } = useQuery(GET_SIGNALS)
    useSubscription(VIP_SIGNALS, {
        onSubscriptionData: ({ subscriptionData }) => {
            const { vipSignal } = subscriptionData.data;
            if (vipSignal) {
                const updateNews = [...news, vipSignal]
                setNews(updateNews);
            }
        }
      });
    useSubscription(VIP_MESSAGES, {
        onSubscriptionData: ({ subscriptionData }) => {
            const { vipMessage } = subscriptionData.data;
            if (vipMessage) {
                const updateMessages = [...messages, vipMessage]
                setMessages(updateMessages);
            }
        }
      });
    const signals = data?.signals || [];
    return (
        <Box display="flex" height="calc(100vh - 96px)">
            <Box flex={1} bgcolor={baseTheme.palette.secondary.main} padding={2}>
                <Box
                    border={`1px solid ${baseTheme.palette.border.light}`}
                    borderRadius={16}
                    height="100%" 
                    bgcolor={`${baseTheme.palette.primary.light}cc`}
                    overflow="auto"
                >
                    <SignalsList signals={signals} />
                </Box>
            </Box>
            <Box flex={2}>
                <iframe width="100%" height="100%" src="https://iqoption.com/es" />
            </Box>
            <Box flex={1} bgcolor={baseTheme.palette.secondary.main} padding={2}>
                <Box
                    border={`1px solid ${baseTheme.palette.border.light}`}
                    borderRadius={16}
                    height="100%" 
                    bgcolor={`${baseTheme.palette.primary.light}cc`}
                    overflow="auto"
                >
                    <MessageList messages={messages} />
                </Box>
            </Box>
        </Box>
    )
}