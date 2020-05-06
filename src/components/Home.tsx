import React from 'react';
import { RouteComponentProps } from '@reach/router';

export type HomeProps = {
    id: string;
    fullName: string;
    email: string;
}

export const Home: React.FC<RouteComponentProps<HomeProps>> = ({id, fullName, email}) => (<p>{id}
    <br />
    {fullName}
    <br />
    Welcome! {email}</p>)