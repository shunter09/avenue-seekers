

import * as React from 'react';

interface EmailTemplateProps {
    email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({email}) => {
    return (
        <div>
            <h1>Welcome, {email}!</h1>
        </div>
    );
}