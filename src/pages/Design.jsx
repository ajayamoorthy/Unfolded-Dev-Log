import GameTreatmentDoc from "../assets/files/GameTreatmentDoc.pdf";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Button from "../components/Button";

const Design = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">Game Synopsis</h1>

      <p className="body-1 max-w-3xl mx-auto mb-6 mt-6 text-n-2 lg:mb-8">
        Colin, a 14 year old boy living in your average suburb, finally achieves
        his dream of becoming a magical boy. The only issue, he was assigned
        magical girl clothes, he’s a boy for crying out loud! How is he expected
        to be taken seriously in a poofy skirt? Follow Colin as he traverses the
        varying dangerous dimensions needed to reach those in charge of all
        magical beings, the Organization of Magical People.
      </p>

      <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
        Over the course of the adventure, Colin experiences the horrors outside
        of the Earth he is familiar with, over time learning to embrace the
        clothes that he was assigned. By the end, Colin was so invested in the
        process to reach the OoMP, that he realized his newfound enjoyment
        wearing feminine clothing but confidence in his identity as a boy.
      </p>

      <Button className="mt-10 text-2xl">
        <a href={GameTreatmentDoc} target="_blank" rel="noopener noreferrer">
          Game Treatment Doc Download
        </a>
      </Button>
      <ButtonGradient />
    </div>
  );
};

export default Design;
