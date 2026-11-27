import AuthLayout from "../componens/Layouts/AuthLayouts";
import FormRegister from "../componens/Fragmen/FormRegister";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register" type="register">
            <FormRegister/>
        </AuthLayout>
    );
}

export default RegisterPage;