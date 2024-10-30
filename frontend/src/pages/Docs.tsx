import { useEffect, useState } from "react";
import Content from "../components/Docs/Content";
import LeftSidebar from "../components/Docs/LeftSidebar";
import RightSidebar from "../components/Docs/RightSidebar";

const sectionsData = [
  {
    id: "intro",
    title: "Introduction",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem lacus torquent risus convallis penatibus aliquam eu condimentum fusce. Eros maecenas justo metus eros nulla aliquet, consequat vulputate est. Curabitur mollis vehicula platea auctor porttitor class quis pretium. Lacinia metus erat nunc velit augue egestas dignissim posuere vivamus! Dis viverra quis porta dictum ornare vestibulum. Libero fringilla ut blandit adipiscing id feugiat fusce faucibus.",
    subTopics: [
      {
        id: "intro-sub1",
        title: "What is it?",
        content:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem lacus torquent risus convallis penatibus aliquam eu condimentum fusce. Eros maecenas justo metus eros nulla aliquet, consequat vulputate est. Curabitur mollis vehicula platea auctor porttitor class quis pretium. Lacinia metus erat nunc velit augue egestas dignissim posuere vivamus! Dis viverra quis porta dictum ornare vestibulum. Libero fringilla ut blandit adipiscing id feugiat fusce faucibus.Erat adipiscing egestas dapibus mattis per quisque. Aliquet mattis convallis laoreet aliquet porta conubia auctor. Leo iaculis interdum eleifend posuere quam cras auctor. Justo nisl turpis vestibulum sodales potenti hendrerit at. Hendrerit rutrum cubilia tempus enim curae tincidunt rhoncus a. Maximus porttitor tortor nisl phasellus amet pretium commodo dolor. Malesuada suscipit cras dictumst neque sodales. Dictum justo feugiat vehicula litora laoreet.Integer feugiat eu integer suscipit eleifend nec. In sapien sagittis laoreet dis, platea quis. Ultrices mauris dignissim porta est morbi tempor nisl aptent? Non dictum adipiscing euismod; volutpat senectus quam. Dictum penatibus dolor aliquet finibus suscipit; placerat tortor. Ad volutpat dignissim velit tristique ligula. Urna ut egestas pulvinar efficitur diam vehicula.Phasellus nam facilisis hendrerit vulputate fames netus placerat fermentum. Varius auctor class felis orci ac, augue faucibus volutpat. Urna nunc placerat tellus natoque arcu ut malesuada. Sagittis vulputate nulla posuere molestie tellus justo. Duis nunc erat maecenas sem curae! Quis praesent curae fringilla lacinia eros nostra vulputate.Primis amet interdum sagittis nullam metus; pulvinar netus cras. Taciti leo primis facilisi aliquam placerat litora pharetra. Finibus maximus interdum a venenatis platea vulputate nunc nunc. Ullamcorper potenti condimentum curabitur est pharetra feugiat nulla rutrum. Class orci interdum adipiscing gravida per cras ante praesent. Semper himenaeos aptent ac sagittis ornare elit vivamus laoreet. Elit justo et fringilla; sapien sapien efficitur dis sodales primis. Nam habitant lectus morbi himenaeos eget mattis. Sed interdum varius nostra; laoreet ligula per. Volutpat elit ac ullamcorper consectetur quis nisi hendrerit.Parturient fusce hendrerit congue maecenas vel hendrerit magna viverra facilisis. Libero fermentum ante fames erat eu curabitur non nec. Cras habitant volutpat ullamcorper quis risus curabitur praesent. Curae aliquam nulla ante mi penatibus posuere urna porta. Nascetur sagittis a auctor fusce curabitur facilisi tempor. Scelerisque iaculis viverra tristique hac ornare bibendum.",
      },
      {
        id: "intro-sub2",
        title: "Why use it?",
        content:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem lacus torquent risus convallis penatibus aliquam eu condimentum fusce. Eros maecenas justo metus eros nulla aliquet, consequat vulputate est. Curabitur mollis vehicula platea auctor porttitor class quis pretium. Lacinia metus erat nunc velit augue egestas dignissim posuere vivamus! Dis viverra quis porta dictum ornare vestibulum. Libero fringilla ut blandit adipiscing id feugiat fusce faucibus.Erat adipiscing egestas dapibus mattis per quisque. Aliquet mattis convallis laoreet aliquet porta conubia auctor. Leo iaculis interdum eleifend posuere quam cras auctor. Justo nisl turpis vestibulum sodales potenti hendrerit at. Hendrerit rutrum cubilia tempus enim curae tincidunt rhoncus a. Maximus porttitor tortor nisl phasellus amet pretium commodo dolor. Malesuada suscipit cras dictumst neque sodales. Dictum justo feugiat vehicula litora laoreet.Integer feugiat eu integer suscipit eleifend nec. In sapien sagittis laoreet dis, platea quis. Ultrices mauris dignissim porta est morbi tempor nisl aptent? Non dictum adipiscing euismod; volutpat senectus quam. Dictum penatibus dolor aliquet finibus suscipit; placerat tortor. Ad volutpat dignissim velit tristique ligula. Urna ut egestas pulvinar efficitur diam vehicula.Phasellus nam facilisis hendrerit vulputate fames netus placerat fermentum. Varius auctor class felis orci ac, augue faucibus volutpat. Urna nunc placerat tellus natoque arcu ut malesuada. Sagittis vulputate nulla posuere molestie tellus justo. Duis nunc erat maecenas sem curae! Quis praesent curae fringilla lacinia eros nostra vulputate.Primis amet interdum sagittis nullam metus; pulvinar netus cras. Taciti leo primis facilisi aliquam placerat litora pharetra. Finibus maximus interdum a venenatis platea vulputate nunc nunc. Ullamcorper potenti condimentum curabitur est pharetra feugiat nulla rutrum. Class orci interdum adipiscing gravida per cras ante praesent. Semper himenaeos aptent ac sagittis ornare elit vivamus laoreet. Elit justo et fringilla; sapien sapien efficitur dis sodales primis. Nam habitant lectus morbi himenaeos eget mattis. Sed interdum varius nostra; laoreet ligula per. Volutpat elit ac ullamcorper consectetur quis nisi hendrerit.Parturient fusce hendrerit congue maecenas vel hendrerit magna viverra facilisis. Libero fermentum ante fames erat eu curabitur non nec. Cras habitant volutpat ullamcorper quis risus curabitur praesent. Curae aliquam nulla ante mi penatibus posuere urna porta. Nascetur sagittis a auctor fusce curabitur facilisi tempor. Scelerisque iaculis viverra tristique hac ornare bibendum.",
      },
    ],
  },
  {
    id: "setup",
    title: "Setup",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem lacus torquent risus convallis penatibus aliquam eu condimentum fusce. Eros maecenas justo metus eros nulla aliquet, consequat vulputate est. Curabitur mollis vehicula platea auctor porttitor class quis pretium. Lacinia metus erat nunc velit augue egestas dignissim posuere vivamus! Dis viverra quis porta dictum ornare vestibulum. Libero fringilla ut blandit adipiscing id feugiat fusce faucibus.",
    subTopics: [
      {
        id: "setup-sub1",
        title: "Requirements",
        content:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem lacus torquent risus convallis penatibus aliquam eu condimentum fusce. Eros maecenas justo metus eros nulla aliquet, consequat vulputate est. Curabitur mollis vehicula platea auctor porttitor class quis pretium. Lacinia metus erat nunc velit augue egestas dignissim posuere vivamus! Dis viverra quis porta dictum ornare vestibulum. Libero fringilla ut blandit adipiscing id feugiat fusce faucibus.Erat adipiscing egestas dapibus mattis per quisque. Aliquet mattis convallis laoreet aliquet porta conubia auctor. Leo iaculis interdum eleifend posuere quam cras auctor. Justo nisl turpis vestibulum sodales potenti hendrerit at. Hendrerit rutrum cubilia tempus enim curae tincidunt rhoncus a. Maximus porttitor tortor nisl phasellus amet pretium commodo dolor. Malesuada suscipit cras dictumst neque sodales. Dictum justo feugiat vehicula litora laoreet.Integer feugiat eu integer suscipit eleifend nec. In sapien sagittis laoreet dis, platea quis. Ultrices mauris dignissim porta est morbi tempor nisl aptent? Non dictum adipiscing euismod; volutpat senectus quam. Dictum penatibus dolor aliquet finibus suscipit; placerat tortor. Ad volutpat dignissim velit tristique ligula. Urna ut egestas pulvinar efficitur diam vehicula.Phasellus nam facilisis hendrerit vulputate fames netus placerat fermentum. Varius auctor class felis orci ac, augue faucibus volutpat. Urna nunc placerat tellus natoque arcu ut malesuada. Sagittis vulputate nulla posuere molestie tellus justo. Duis nunc erat maecenas sem curae! Quis praesent curae fringilla lacinia eros nostra vulputate.Primis amet interdum sagittis nullam metus; pulvinar netus cras. Taciti leo primis facilisi aliquam placerat litora pharetra. Finibus maximus interdum a venenatis platea vulputate nunc nunc. Ullamcorper potenti condimentum curabitur est pharetra feugiat nulla rutrum. Class orci interdum adipiscing gravida per cras ante praesent. Semper himenaeos aptent ac sagittis ornare elit vivamus laoreet. Elit justo et fringilla; sapien sapien efficitur dis sodales primis. Nam habitant lectus morbi himenaeos eget mattis. Sed interdum varius nostra; laoreet ligula per. Volutpat elit ac ullamcorper consectetur quis nisi hendrerit.Parturient fusce hendrerit congue maecenas vel hendrerit magna viverra facilisis. Libero fermentum ante fames erat eu curabitur non nec. Cras habitant volutpat ullamcorper quis risus curabitur praesent. Curae aliquam nulla ante mi penatibus posuere urna porta. Nascetur sagittis a auctor fusce curabitur facilisi tempor. Scelerisque iaculis viverra tristique hac ornare bibendum.",
      },
      {
        id: "setup-sub2",
        title: "Installation",
        content:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem lacus torquent risus convallis penatibus aliquam eu condimentum fusce. Eros maecenas justo metus eros nulla aliquet, consequat vulputate est. Curabitur mollis vehicula platea auctor porttitor class quis pretium. Lacinia metus erat nunc velit augue egestas dignissim posuere vivamus! Dis viverra quis porta dictum ornare vestibulum. Libero fringilla ut blandit adipiscing id feugiat fusce faucibus.Erat adipiscing egestas dapibus mattis per quisque. Aliquet mattis convallis laoreet aliquet porta conubia auctor. Leo iaculis interdum eleifend posuere quam cras auctor. Justo nisl turpis vestibulum sodales potenti hendrerit at. Hendrerit rutrum cubilia tempus enim curae tincidunt rhoncus a. Maximus porttitor tortor nisl phasellus amet pretium commodo dolor. Malesuada suscipit cras dictumst neque sodales. Dictum justo feugiat vehicula litora laoreet.Integer feugiat eu integer suscipit eleifend nec. In sapien sagittis laoreet dis, platea quis. Ultrices mauris dignissim porta est morbi tempor nisl aptent? Non dictum adipiscing euismod; volutpat senectus quam. Dictum penatibus dolor aliquet finibus suscipit; placerat tortor. Ad volutpat dignissim velit tristique ligula. Urna ut egestas pulvinar efficitur diam vehicula.Phasellus nam facilisis hendrerit vulputate fames netus placerat fermentum. Varius auctor class felis orci ac, augue faucibus volutpat. Urna nunc placerat tellus natoque arcu ut malesuada. Sagittis vulputate nulla posuere molestie tellus justo. Duis nunc erat maecenas sem curae! Quis praesent curae fringilla lacinia eros nostra vulputate.Primis amet interdum sagittis nullam metus; pulvinar netus cras. Taciti leo primis facilisi aliquam placerat litora pharetra. Finibus maximus interdum a venenatis platea vulputate nunc nunc. Ullamcorper potenti condimentum curabitur est pharetra feugiat nulla rutrum. Class orci interdum adipiscing gravida per cras ante praesent. Semper himenaeos aptent ac sagittis ornare elit vivamus laoreet. Elit justo et fringilla; sapien sapien efficitur dis sodales primis. Nam habitant lectus morbi himenaeos eget mattis. Sed interdum varius nostra; laoreet ligula per. Volutpat elit ac ullamcorper consectetur quis nisi hendrerit.Parturient fusce hendrerit congue maecenas vel hendrerit magna viverra facilisis. Libero fermentum ante fames erat eu curabitur non nec. Cras habitant volutpat ullamcorper quis risus curabitur praesent. Curae aliquam nulla ante mi penatibus posuere urna porta. Nascetur sagittis a auctor fusce curabitur facilisi tempor. Scelerisque iaculis viverra tristique hac ornare bibendum.",
      },
    ],
  },
  {
    id: "usage",
    title: "Usage",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem lacus torquent risus convallis penatibus aliquam eu condimentum fusce. Eros maecenas justo metus eros nulla aliquet, consequat vulputate est. Curabitur mollis vehicula platea auctor porttitor class quis pretium. Lacinia metus erat nunc velit augue egestas dignissim posuere vivamus! Dis viverra quis porta dictum ornare vestibulum. Libero fringilla ut blandit adipiscing id feugiat fusce faucibus.",
    subTopics: [
      {
        id: "usage-sub1",
        title: "Basic Usage",
        content:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem lacus torquent risus convallis penatibus aliquam eu condimentum fusce. Eros maecenas justo metus eros nulla aliquet, consequat vulputate est. Curabitur mollis vehicula platea auctor porttitor class quis pretium. Lacinia metus erat nunc velit augue egestas dignissim posuere vivamus! Dis viverra quis porta dictum ornare vestibulum. Libero fringilla ut blandit adipiscing id feugiat fusce faucibus.Erat adipiscing egestas dapibus mattis per quisque. Aliquet mattis convallis laoreet aliquet porta conubia auctor. Leo iaculis interdum eleifend posuere quam cras auctor. Justo nisl turpis vestibulum sodales potenti hendrerit at. Hendrerit rutrum cubilia tempus enim curae tincidunt rhoncus a. Maximus porttitor tortor nisl phasellus amet pretium commodo dolor. Malesuada suscipit cras dictumst neque sodales. Dictum justo feugiat vehicula litora laoreet.Integer feugiat eu integer suscipit eleifend nec. In sapien sagittis laoreet dis, platea quis. Ultrices mauris dignissim porta est morbi tempor nisl aptent? Non dictum adipiscing euismod; volutpat senectus quam. Dictum penatibus dolor aliquet finibus suscipit; placerat tortor. Ad volutpat dignissim velit tristique ligula. Urna ut egestas pulvinar efficitur diam vehicula.Phasellus nam facilisis hendrerit vulputate fames netus placerat fermentum. Varius auctor class felis orci ac, augue faucibus volutpat. Urna nunc placerat tellus natoque arcu ut malesuada. Sagittis vulputate nulla posuere molestie tellus justo. Duis nunc erat maecenas sem curae! Quis praesent curae fringilla lacinia eros nostra vulputate.Primis amet interdum sagittis nullam metus; pulvinar netus cras. Taciti leo primis facilisi aliquam placerat litora pharetra. Finibus maximus interdum a venenatis platea vulputate nunc nunc. Ullamcorper potenti condimentum curabitur est pharetra feugiat nulla rutrum. Class orci interdum adipiscing gravida per cras ante praesent. Semper himenaeos aptent ac sagittis ornare elit vivamus laoreet. Elit justo et fringilla; sapien sapien efficitur dis sodales primis. Nam habitant lectus morbi himenaeos eget mattis. Sed interdum varius nostra; laoreet ligula per. Volutpat elit ac ullamcorper consectetur quis nisi hendrerit.Parturient fusce hendrerit congue maecenas vel hendrerit magna viverra facilisis. Libero fermentum ante fames erat eu curabitur non nec. Cras habitant volutpat ullamcorper quis risus curabitur praesent. Curae aliquam nulla ante mi penatibus posuere urna porta. Nascetur sagittis a auctor fusce curabitur facilisi tempor. Scelerisque iaculis viverra tristique hac ornare bibendum.",
      },
      {
        id: "usage-sub2",
        title: "Advanced Usage",
        content:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem lacus torquent risus convallis penatibus aliquam eu condimentum fusce. Eros maecenas justo metus eros nulla aliquet, consequat vulputate est. Curabitur mollis vehicula platea auctor porttitor class quis pretium. Lacinia metus erat nunc velit augue egestas dignissim posuere vivamus! Dis viverra quis porta dictum ornare vestibulum. Libero fringilla ut blandit adipiscing id feugiat fusce faucibus.Erat adipiscing egestas dapibus mattis per quisque. Aliquet mattis convallis laoreet aliquet porta conubia auctor. Leo iaculis interdum eleifend posuere quam cras auctor. Justo nisl turpis vestibulum sodales potenti hendrerit at. Hendrerit rutrum cubilia tempus enim curae tincidunt rhoncus a. Maximus porttitor tortor nisl phasellus amet pretium commodo dolor. Malesuada suscipit cras dictumst neque sodales. Dictum justo feugiat vehicula litora laoreet.Integer feugiat eu integer suscipit eleifend nec. In sapien sagittis laoreet dis, platea quis. Ultrices mauris dignissim porta est morbi tempor nisl aptent? Non dictum adipiscing euismod; volutpat senectus quam. Dictum penatibus dolor aliquet finibus suscipit; placerat tortor. Ad volutpat dignissim velit tristique ligula. Urna ut egestas pulvinar efficitur diam vehicula.Phasellus nam facilisis hendrerit vulputate fames netus placerat fermentum. Varius auctor class felis orci ac, augue faucibus volutpat. Urna nunc placerat tellus natoque arcu ut malesuada. Sagittis vulputate nulla posuere molestie tellus justo. Duis nunc erat maecenas sem curae! Quis praesent curae fringilla lacinia eros nostra vulputate.Primis amet interdum sagittis nullam metus; pulvinar netus cras. Taciti leo primis facilisi aliquam placerat litora pharetra. Finibus maximus interdum a venenatis platea vulputate nunc nunc. Ullamcorper potenti condimentum curabitur est pharetra feugiat nulla rutrum. Class orci interdum adipiscing gravida per cras ante praesent. Semper himenaeos aptent ac sagittis ornare elit vivamus laoreet. Elit justo et fringilla; sapien sapien efficitur dis sodales primis. Nam habitant lectus morbi himenaeos eget mattis. Sed interdum varius nostra; laoreet ligula per. Volutpat elit ac ullamcorper consectetur quis nisi hendrerit.Parturient fusce hendrerit congue maecenas vel hendrerit magna viverra facilisis. Libero fermentum ante fames erat eu curabitur non nec. Cras habitant volutpat ullamcorper quis risus curabitur praesent. Curae aliquam nulla ante mi penatibus posuere urna porta. Nascetur sagittis a auctor fusce curabitur facilisi tempor. Scelerisque iaculis viverra tristique hac ornare bibendum.",
      },
    ],
  },
];

export default function Docs() {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const [activeHeading, setActiveHeading] = useState<string>("intro-sub1");

  function scrollToSection(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    scrollToSection(id);
  };

  const handleHeadingClick = (id: string) => {
    setActiveHeading(id);
    scrollToSection(id);
  };

  return (
    <div className="flex h-screen overflow-auto">
      <LeftSidebar
        sections={sectionsData}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      <Content
        sections={sectionsData}
        setActiveSection={setActiveSection}
        setActiveHeading={setActiveHeading}
      />
      <RightSidebar
        headings={
          sectionsData.find((section) => section.id === activeSection)
            ?.subTopics || []
        }
        activeHeading={activeHeading}
        onHeadingClick={handleHeadingClick}
      />
    </div>
  );
}
