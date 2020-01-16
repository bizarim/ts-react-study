import React from 'react';

interface ImPureProps {
    users: Array<User>;
}
interface User {
    id: number;
    name: string;
}

export const Test = React.memo<ImPureProps>(
    ({ users }) => {
        return (
            <div>
                <div>ImPure</div>
                {
                    users.map((user, index) => (
                        <div key={index} style={{ display: 'inline' }}>
                            {user.name}
                        </div>
                    ))
                }
            </div>
        );
    },
    (prevProps, nextProps) => {
        if (prevProps.users.length !== nextProps.users.length) {
            return false;
        }
        let equal = true;
        prevProps.users.forEach((prevUser, index) => {
            if (prevUser.name !== nextProps.users[index].name) {
                equal = false;
            }
        });
        return equal;
    }
);