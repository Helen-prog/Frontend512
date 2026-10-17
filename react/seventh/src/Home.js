import './Home.scss';

function Home(){
    return (
        <div>
            <h2>Home Page</h2>
            <div className="block1">
                <div className="wrap">
                    <h2>Header 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptas modi necessitatibus ipsam repellendus id. Eligendi tempore nisi consequuntur vitae quas soluta ut? Atque corrupti dolore eum praesentium vel eos.</p>
                    <h3>Name</h3>
                    <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aut beatae amet. Atque et dolor magnam soluta quam consectetur veritatis dignissimos sapiente ut ex, doloribus fugit aperiam culpa repellat nisi.</p>
                    <div className="last"><button>Кнопка</button></div>
                </div>
            </div>
            <div className="block2">
                <div className="wrap">
                    <h2>Header 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptas modi necessitatibus ipsam repellendus id. Eligendi tempore nisi consequuntur vitae quas soluta ut? Atque corrupti dolore eum praesentium vel eos.</p>
                    <h3>Name</h3>
                    <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aut beatae amet. Atque et dolor magnam soluta quam consectetur veritatis dignissimos sapiente ut ex, doloribus fugit aperiam culpa repellat nisi.</p>
                    <div className="last"><button>Кнопка</button></div>
                </div>
            </div>
            <div className="block3">
                <div className="wrap">
                    <h2>Header 3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptas modi necessitatibus ipsam repellendus id. Eligendi tempore nisi consequuntur vitae quas soluta ut? Atque corrupti dolore eum praesentium vel eos.</p>
                    <h3>Name</h3>
                    <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aut beatae amet. Atque et dolor magnam soluta quam consectetur veritatis dignissimos sapiente ut ex, doloribus fugit aperiam culpa repellat nisi.</p>
                    <div className="last"><button>Кнопка</button></div>
                </div>
            </div>
            <div className="block4">
                <div className="wrap">
                    <div className="container">
                        <div className="gold"></div>
                        <div className="red"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                        <div className="orange"></div>
                    </div>
                    <div className="container2">
                        <div className="error">Ошибка</div>
                        <div className="neutral">Утверждение</div>
                        <div className="good">Сообщение</div>
                        <div className="warning">Предупреждение</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;