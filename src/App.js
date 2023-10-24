import { Welcome } from "./components/Welcome";
import { Messages } from "./components/Messages"

export const App = () => {
    return (
        <div  className="center">
            <Welcome name='Edil' position='Daughter'/>
            <Welcome name='Hooyo' position='Mother'/>
            <Welcome name='Aabo' position='Father'/>
            <Messages/>
        </div>
    );
};