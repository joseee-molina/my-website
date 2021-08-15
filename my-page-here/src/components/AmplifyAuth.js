import React from "react";
import {AmplifySignIn, AmplifySignUp} from "@aws-amplify/ui-react";
import Amplify from "@aws-amplify/core";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function AmplifyAuth() {
    return (
        <React.Fragment>
            <AmplifySignUp
                slot="sign-up"
                usernameAlias="email"
                formFields={[
                    {
                        type: "email",
                        inputProps: {required: true, autocomplete: "username"},
                    },
                    {
                        type: "password",
                        inputProps: {required: true, autocomplete: "new-password"},
                    },
                    {
                        type: "name",
                        label: "Full Name *",
                        placeholder: "Your Name",
                        inputProps: {required: true},
                    },
                    {
                        type: "custom:company",
                        label: "Company",
                        placeholder: "Your Company",
                        inputProps: {required: false},
                    },
                    {
                        type: "custom:role",
                        label: "Role",
                        placeholder: "Your Role",
                        inputProps: {required: false},
                    },
                ]}
            />
            <AmplifySignIn slot="sign-in" usernameAlias="email"/>
        </React.Fragment>
    );
}