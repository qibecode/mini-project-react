import AuthLayout from "../componens/Layouts/AuthLayouts";
import FormLogin from "../componens/Fragmen/FormLogin";

const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin />
        </AuthLayout>
    );
}

export default LoginPage;