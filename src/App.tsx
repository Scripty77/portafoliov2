import './App.css';
import ProfileCard from './components/ProfileCard';
import ProjectCard from './components/ProjectCard';

function App() {
    return (
        <div className="app-container">
            <h1 className="text-portafolio"></h1>
            <ProfileCard />
            <div className="project-container">
                <ProjectCard
                    title="ETH App"
                    description="frontend application that integrates Web3 functionalities"
                    link="https://github.com/Scripty77/EthDapp"
                    image="https://media.discordapp.net/attachments/1190505318178889865/1319306823609880597/image.png?ex=67657bba&is=67642a3a&hm=d6b79860f165359d217ed651668a1467168279e28b2b6df3de55ece89aea721c&=&format=webp&quality=lossless&width=483&height=647"
                />
            </div>
        </div>
    );
}

export default App;
