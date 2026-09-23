import LandingNav from "./landingcom/LandingNav";
import LandingHero from "./landingcom/LandingHero";
import LandingServices from "./landingcom/LandingServices";

import LandingEmployees from "./landingcom/LandingEmployees";
import LandingJob from "./landingcom/LandingJobType";
import LandingFeed from "./landingcom/LandingFeed";
// import LandingNewsletter from "./landingcom/LandingNewsletter";
import LandingFooter from "./landingcom/LandingFooter";
import LandingTeam from "./landingcom/LandingTeam";
import ContactPage from "./landingcom/LandingContact";

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-white font-sans antialiased">
			<LandingNav />


			<div id="learn-more">
				<div id="home" className="scroll-mt-16">
					<LandingHero />
				</div>
<div id="employee" className="scroll-mt-16">
					<LandingEmployees />
				</div>
				

				<div id="services" className="scroll-mt-16">
					<LandingServices />
				</div>

				<div id="types" className="scroll-mt-16">
					<LandingJob />
				</div>
				<div id="feedback" className="scroll-mt-16">
					<LandingFeed />
				</div>


				<div id="team" className="scroll-mt-16">
					<LandingTeam />
				</div>
				<div id="contact" className="scroll-mt-16">
					<ContactPage />
				</div>
				{/* <LandingNewsletter /> */}
			</div>
			<div id="footer" className="scroll-mt-16">
				<LandingFooter />
			</div>
		</div>
	);
}
