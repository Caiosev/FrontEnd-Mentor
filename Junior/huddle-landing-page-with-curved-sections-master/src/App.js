import Header from "./components/Header/Header";
import Titulo from "./components/Titulo/Titulo";
import Mockup from "./components/Mockup/Mockup";
import IconComunities from "./components/IconComunities/IconComunities";
import iconcom from './images/icon-communities.svg'
import iconmes from './images/icon-messages.svg'
import IlustratorComponent from "./components/IlustratorComponent/IlustratorComponent";
import ilustratorGrowTogether from './images/illustration-grow-together.svg'
import ilustratorYourUsers from './images/illustration-your-users.svg'
import ilustratorFlowingCon from './images/illustration-flowing-conversation.svg'
import Footer from "./components/Footer/Footer";
import bgTopSec1 from './images/bg-section-top-mobile-1.svg'
import bgBottomSec1 from './images/bg-section-bottom-mobile-1.svg'
import bgTopSec2 from './images/bg-section-top-mobile-2.svg'
import bgBottomSec2 from './images/bg-section-bottom-mobile-2.svg'
function App() {


  const titulo1='Build The Community Your Fans Will Love'
  const subTitulo1= 'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion'
  const btnText1 = 'Get Started For Free'
  const ilustratorTitulo1 = 'Grow Thogether'
  const ilustratorTitulo2 = 'Flowing Conversations'
  const ilustratorTitulo3 = 'Your Users'
  const ilustratorText1 = 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form'
  const ilustratorText2="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for more natural flow"
  const ilustratorText3 = "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."



  return (
    <div className="App">
     <Header />
     <Titulo titulo={titulo1} subTitulo={subTitulo1} btnText={btnText1} btn/>
     <Mockup />
     <IconComunities icon={iconcom} num={'1.4k+'} p={'Communities Formed'} />
     <IconComunities icon={iconmes} num={'2.7m+'} p={'Messages Sent'} />
     <IlustratorComponent image={ilustratorGrowTogether} titulo={ilustratorTitulo1} p={ilustratorText1} bgTop={bgTopSec1} bgBottom={bgBottomSec1}/>
     <IlustratorComponent image={ilustratorFlowingCon} titulo={ilustratorTitulo2} p={ilustratorText2}/>
     <IlustratorComponent image={ilustratorYourUsers} titulo={ilustratorTitulo3} p={ilustratorText3} bgTop={bgTopSec2} bgBottom={bgBottomSec2}/>
     <Titulo titulo={'Ready to Build Your Community?'}  btnText={btnText1} btn/>
     <Footer />
    </div>
  );
}

export default App;
