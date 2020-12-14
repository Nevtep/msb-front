import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import { Box, TextField, Typography } from '@material-ui/core';
import { baseTheme } from '../assets/theme';
import SignalsList from './SignalsList';
import { useMutation, useQuery, useSubscription } from '@apollo/react-hooks';
import { CurrentUserQuery_currentUser as User } from '../queries/__generated__/CurrentUserQuery';
import { GET_SIGNALS } from '../queries/getSignals';
import MessageList from './MessageList';
import { VIP_MESSAGES, VIP_SIGNALS } from '../subscriptions';
import { SEND_MESSAGE } from '../mutations/sendMessage';
import { SEND_SIGNAL } from '../mutations/sendSignal';
import { isAdmin } from '../services/auth';
import SignalsBackground from '../assets/images/fondo-academia.jpg';
import MessagesBackground from '../assets/images/fondo-inversores.jpg';
import { useTheme } from '@material-ui/styles';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    signals: {
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${SignalsBackground})`,
        backgroundPosition: 'right',
        backgroundSize: 'cover',
    },
    messages: {
        backgroundImage: `url(${MessagesBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
  }),
);


const useInputStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        '&:hover': {
            '& $notchedOutline': {
                borderColor: theme.palette.secondary.main
            }
        },
        color: theme.palette.primary.dark
    },
    focused: {
        '&:hover': {
            '& $notchedOutline': {
                borderColor: theme.palette.primary.main
            }
        },
    },
    notchedOutline: {
        borderColor: theme.palette.secondary.main,
        backgroundColor: `${baseTheme.palette.primary.light}33`
    }
  }),
);

interface SignalsProps extends RouteComponentProps {
    user: User
};

export const Signals: React.FC<SignalsProps> = ({ user }) => {
    const classes = useStyles();
    const inputClasses = useInputStyles();
    const theme = useTheme();
    const [messages, setMessages] = useState([]);
    const [news, setNews] = useState([]);
    const [message, setMessage] = useState('');
    const [vipMessage, setVipMessage] = useState('');

    const { data } = useQuery(GET_SIGNALS)
    const {data: signalSubscriptionData} = useSubscription(VIP_SIGNALS);
    const {data: messageSubscriptionData} = useSubscription(VIP_MESSAGES);

    const [sendMessage] = useMutation(SEND_MESSAGE);
    const [sendSignal] = useMutation(SEND_SIGNAL);
    useEffect(() => {
        const { vipSignal } = signalSubscriptionData || {};
        if (vipSignal) {
            const updateNews = [...news, vipSignal]
            setNews(updateNews);
        }
    }, [signalSubscriptionData])

    useEffect(() => {
        const { vipMessage } = messageSubscriptionData || {};
        if (vipMessage) {
            const updateMessages = [...messages, vipMessage]
            setMessages(updateMessages);
        }
    }, [messageSubscriptionData])

    const submitMessage = (ev) => {
        ev.preventDefault();
        sendMessage({
            variables: {
                message
            }
        });
        setMessage('');
    }

    const submitVipMessage = (ev) => {
        ev.preventDefault();
        sendSignal({
            variables: {
                vipMessage
            }
        });
        setVipMessage('');
    }

    const signals = data?.signals || [];
    return (
        <Box display="flex" height="calc(100vh - 96px)">
            <Box
                className={classes.signals}
                flex={1}
                bgcolor={baseTheme.palette.secondary.main}
                padding={2}
            >
                <Typography variant="h5" color="primary">
                    Señales
                </Typography>
                <Box
                    border={`1px solid ${baseTheme.palette.secondary.main}`}
                    borderRadius={4}
                    height="95%" 
                    bgcolor={`${baseTheme.palette.primary.light}cc`}
                    overflow="auto"
                >
                    <SignalsList signals={signals} />
                </Box>
            </Box>
            <Box flex={2}>
                <iframe width="100%" height="100%" src="https://iqoption.com/traderoom" />
            </Box>
            <Box
                className={classes.messages}
                flex={1}
                bgcolor={baseTheme.palette.secondary.main}
                padding={2}
                display="flex"
                flexDirection="column"
            >
                <Typography variant="h5" color="primary">
                    Anuncios
                </Typography>
                <Box
                    border={`1px solid ${baseTheme.palette.secondary.main}`}
                    borderRadius={4}
                    bgcolor={`${baseTheme.palette.primary.light}cc`}
                    overflow="auto"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    flex={1}
                    marginBottom={1}
                >
                    <MessageList messages={news} />
                </Box>
                {isAdmin(user) && (<form onSubmit={submitVipMessage}>
                    <TextField
                        value={vipMessage}
                        onChange={(ev) => setVipMessage(ev.currentTarget.value)}
                        variant="outlined"
                        color="primary"
                        placeholder="Escribe un mensaje"
                        fullWidth
                        InputProps={{
                            classes: inputClasses
                        }}
                    />
                </form>)}
                <Box marginTop={1}>
                    <Typography variant="h5" color="primary">
                        Chat
                    </Typography>
                </Box>
                <Box
                    border={`1px solid ${baseTheme.palette.secondary.main}`}
                    borderRadius={4}
                    bgcolor={`${baseTheme.palette.primary.light}cc`}
                    overflow="auto"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    flex={2}
                    marginTop={1}
                    marginBottom={1}
                >
                    <MessageList messages={messages} />
                </Box>
                <form onSubmit={submitMessage}>
                    <TextField
                        value={message}
                        onChange={(ev) => setMessage(ev.currentTarget.value)}
                        variant="outlined"
                        color="primary"
                        placeholder="Escribe un mensaje"
                        fullWidth
                        InputProps={{
                            classes: inputClasses
                        }}
                    />
                </form>
            </Box>
        </Box>
    )
}