import React from 'react';
import { Redirect } from 'react-router-dom';
interface Props {

}

const logged = true;

const MyPage: React.FC<Props> = () => {
    return (
        <div>
            {
                !logged && <Redirect to='login'/>
            }
            마이페이지
        </div>
    );
};

export default MyPage;
