import LandingNav from "../../components/landingcom/LandingNav";
import LandingHero from "../../components/landingcom/LandingHero";
import LandingServices from "../../components/landingcom/LandingServices";

import LandingEmployees from "../../components/landingcom/LandingEmployees";
import LandingJob from "../../components/landingcom/LandingJobType";
import LandingTestimonials from "../../components/landingcom/LandingTestimonials";
import LandingAbout from "../../components/landingcom/LandingAbout";
import LandingNewsletter from "../../components/landingcom/LandingNewsletter";
import LandingFooter from "../../components/landingcom/LandingFooter";

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-white font-sans antialiased">
			<LandingNav />
			<LandingHero />
			<LandingServices />
			<div id="learn-more">
				
				<LandingEmployees />
				<LandingJob />
				<LandingTestimonials />
				<LandingAbout />
				<LandingNewsletter />
			</div>
			<LandingFooter />
		</div>
	);
}
