import { MainLayout } from 'components';
import { AboutSection, FormSection, IntroSection } from 'sections';
import { SectionIdEnum } from 'types';

const sections = [
  {
    sectionId: SectionIdEnum.intro,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.about,
    component: <AboutSection />,
  },
  {
    sectionId: SectionIdEnum.form,
    component: <FormSection />,
  },
];

export const Main: React.FC = () => {
  return (
    <MainLayout>
      {sections.map(({ component }) => {
        return component;
      })}
    </MainLayout>
  );
};
