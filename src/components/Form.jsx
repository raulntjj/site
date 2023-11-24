import List from './List'

function Form(props){
    return(
        <section>
            <div>
                <h2>Meus jogos</h2>
                <p>Os jogos que mais jogo</p>
                <ul class="games-list">
                    <List
                    url="https://www.twitch.tv/directory/game/VALORANT"
                    img="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg"
                    alt="Imagem do Valorant"
                    />
                    <List
                    url="https://www.twitch.tv/directory/category/counter-strike"
                    img="https://static-cdn.jtvnw.net/ttv-boxart/32399-144x192.jpg"
                    alt="Imagem do Counter Strike"
                    />
                    <List
                    url="https://www.twitch.tv/directory/category/grand-theft-auto-v"
                    img="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-144x192.jpg"
                    alt="Imagem do GTA 5"
                    />
                    <List
                    url="https://www.twitch.tv/directory/category/minecraft"
                    img="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-144x192.jpg"
                    alt="Imagem do Minecraft"
                    />
                    <List
                    url="https://www.twitch.tv/directory/category/ea-sports-fc-24"
                    img="https://static-cdn.jtvnw.net/ttv-boxart/143106037_IGDB-144x192.jpg"
                    alt="Imagem do FIFA 24"
                    />
                </ul>
            </div>
        </section>
        
    )
}

export default Form

/*
<main>
            <section>
                <div>
                    <h2>Meus jogos</h2>
                    <p>Os games que eu mais curto jogar!</p>
                    <ul class="games-list">
                        <li>
                            <a 
                            target="_blank"
                            href="https://www.twitch.tv/directory/game/League%20of%20Legends">
                                <img src="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg" alt="Imagem do jogo League of Legends"/>
                            </a>
                        </li>

                        <li>
                            <a 
                            target="_blank"
                            href="https://www.twitch.tv/directory/game/VALORANT">
                                <img src="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg" alt="Imagem do jogo Valorant"/>
                            </a>
                        </li>

                        <li>
                            <a 
                            target="_blank"
                            href="https://www.twitch.tv/directory/game/Minecraft">
                                <img src="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg" alt="Imagem do jogo Minecraft"/>
                            </a>
                        </li>

                        <li>
                            <a 
                            target="_blank"
                            href="https://www.twitch.tv/directory/game/Teamfight%20Tactics">
                                <img src="https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg" alt="Imagem do jogo TFT"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
*/