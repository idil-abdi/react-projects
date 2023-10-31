import { Stack } from "react-bootstrap"

export const Profile = () => {
    return(
        <Stack className="text-center">
            <h2>About Me</h2>
            <div className="border rounded-3 m-auto px-5 py-2">
                <img alt="experience" width={50} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3T90IBLXrVRyRJCcZCC2tbaNyDcuKHUcEShwHcK3yzjWj0Kmd"/>
                <h3>Education</h3>
                <p>PurpleBeard Boot-Camp Front-End</p>
            </div>
            <p className="px-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis in fuga nesciunt veniam sit atque molestias voluptates recusandae, ad dolorem eligendi excepturi sed, tempore deserunt nobis omnis laudantium ut sint.</p>
        </Stack>
    )
}