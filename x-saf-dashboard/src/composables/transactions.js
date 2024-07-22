import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "https://api.restful-api.dev/";

export default function useTransactions(){
    const transactions = ref([]);
    const transaction = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getTransactions = async() => {
        const response = await axios.get("objects");
        transactions.value = response.data.data;
    };

    const getTransaction = async (id) => {
        const response = await axios.get("objects" + id);
        transaction.value = response.data.data;
    };

    const storeTransaction = async (data) => {
        try{
            await axios.post("skills", data);
            await router.push({ name: "objectsIndex" });
        } catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    };

    const updateTransaction = async (id) => {
        try{
            await axios.put("skills/" + id, transaction.value);
            await router.push({ name: "objectsIndex" });
        } catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    };

    const destroyTransaction = async(id) => {
        if(!window.confirm("Are you sure?")){
            return;
        }
        await axios.delete("objects/" + id);
        await getTransactions();
    };

    return{
        transaction,
        transactions,
        getTransaction,
        getTransactions,
        storeTransaction,
        updateTransaction,
        destroyTransaction,
        errors,
    };
}