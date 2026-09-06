import { GuideIntro } from "../content/guide/intro";
import { WhyAccessibilityMatters } from "../content/guide/why-accessibility-matters";
import { WhereToFindStandards } from "../content/guide/where-to-find-standards";
import { WhereToLearn } from "../content/guide/where-to-learn";
import { HowToGuides } from "../content/guide/how-to-guides";

export const Guide = () => {
  return (
    <>
      <GuideIntro />
      <WhyAccessibilityMatters />
      <WhereToFindStandards />
      <WhereToLearn />
      <HowToGuides />
    </>
  );
};
