import { Container } from 'components/Container/Container';
import { Title } from 'components/ForProfilePage/Title/Title';
import { Avatar } from 'components/ForProfilePage/Avatar/Avatar';
import { InfoCard } from 'components/ForProfilePage/InfoCard/InfoCard';
import { InfoCardsWrapper } from 'components/ForProfilePage/InfoCard/InfoCard.styled';
import { WarningNotice } from 'components/ForProfilePage/WarningNotice/WarningNotice';

const calories = {
  icon: '#icon-cutlery',
  label: 'Daily calorie intake',
  number: '2200',
};

const normOfSports = {
  icon: '#icon-dumbbell',
  label: 'Daily norm of sports',
  number: '110 min',
};

const ProfilePage = () => {
  return (
    <Container>
      <Title></Title>
      <Avatar></Avatar>
      <InfoCardsWrapper>
        <InfoCard
          icon={calories.icon}
          label={calories.label}
          number={calories.number}
        ></InfoCard>
        <InfoCard
          icon={normOfSports.icon}
          label={normOfSports.label}
          number={normOfSports.number}
        ></InfoCard>
      </InfoCardsWrapper>
      <WarningNotice></WarningNotice>
    </Container>
  );
};

export default ProfilePage;
