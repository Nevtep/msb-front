import { useQuery } from "@apollo/react-hooks"
import { IS_LOGGED_IN_QUERY } from "../queries/isLoggedIn"

export const isLoggedIn = () => {
    const { data } = useQuery(IS_LOGGED_IN_QUERY);
    return data;
};

export const isAuthenticated = (roles) => (user) => {
    console.log(user);
    return user.subscriptions.some(s => roles.includes(s.name) && s.startDate < Date.now() < s.endDate)
};

export enum Roles {
    VIP = 'VIP',
    TRAINEE = 'TRAINEE',
    INVESTOR = 'INVESTOR',
    ADMIN = 'ADMIN'
}
export const VipRoles = [Roles.VIP, Roles.ADMIN, Roles.INVESTOR];
export const InvestorRoles = [Roles.INVESTOR, Roles.ADMIN];
export const TraineeRoles = [Roles.TRAINEE, Roles.INVESTOR, Roles.ADMIN];
export const AdminRoles = [Roles.ADMIN];
export const isVIP = isAuthenticated(VipRoles);
export const isInvestor = isAuthenticated(InvestorRoles);
export const isTrainee = isAuthenticated(TraineeRoles)
export const isAdmin = isAuthenticated(AdminRoles);
