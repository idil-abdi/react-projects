import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Stack } from "react-bootstrap";
import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { Repos } from "./components/Repos";
import { AlertBanner } from "./components/AlertBanner";


export const App = () => {
    const [url, setUrl] = useState('');
    const [repos, setRepos] = useState()
    const [error, setError] = useState(false)

    const onSuccess = (url) => {
        setUrl(url);
    }

    useEffect(() => {
        if(url){
            const fetchData = async () => {
                try{
                    const responce = await axios.get(url)

                if (responce.status === 200){
                    setError(false);
                    setRepos(responce.data)
                }else {
                    setError(true);
                    setRepos();
                }
                } catch (error) {
                    setError(true)
                    setRepos();
                }
            }
            fetchData()
        }
    }, [url])

    

    return (
        <Container>
            <Stack gap={3}>
                    <Banner/>
                    <SearchForm onSuccess={onSuccess}/>
                    {repos && <Repos repos={repos}/>}
                    {error && <AlertBanner/>}
            </Stack>
        </Container>
    );
};