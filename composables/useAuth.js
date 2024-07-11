export const useAuth = () => {
    const registerWithEmail = async (username, name, email, password) => {
        try{
            const res = await $fetch('/api/auth/register', {
                method: 'POST',
                body: {username, name, email, password}
            });
    
            if(res){
                useState('user').value = res;
                console.log('Hello from api!');
                await useRouter().push('/dashboard');
            }
        } catch(err){
            console.log('error');
            console.log(err);
        }
    }

    return{
        registerWithEmail,
    }
}