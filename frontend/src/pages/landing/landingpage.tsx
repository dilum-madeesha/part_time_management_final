import LandingNav from "../../components/landingcom/LandingNav";
import LandingHero from "../../components/landingcom/LandingHero";
import LandingServices from "../../components/landingcom/LandingServices";
import LandingHowItWorks from "../../components/landingcom/LandingHowItWorks";
import LandingCategories from "../../components/landingcom/LandingCategories";
import LandingCompanies from "../../components/landingcom/LandingCompanies";
import LandingJobs from "../../components/landingcom/LandingJobs";
import LandingBenefits from "../../components/landingcom/LandingBenefits";
import LandingCTA from "../../components/landingcom/LandingCTA";
import LandingTestimonials from "../../components/landingcom/LandingTestimonials";
import LandingArticles from "../../components/landingcom/LandingArticles";
import LandingNewsletter from "../../components/landingcom/LandingNewsletter";
import LandingFooter from "../../components/landingcom/LandingFooter";

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-white font-sans antialiased">
			<LandingNav />
			<LandingHero />
			<LandingServices />
			<div id="learn-more">
				<LandingHowItWorks />
				<LandingCategories />
				<LandingCompanies />
				<LandingJobs />
				<LandingBenefits />
				<LandingCTA />
				<LandingTestimonials />
				<LandingArticles />
				<LandingNewsletter />
			</div>
			<LandingFooter />
		</div>
	);
}
