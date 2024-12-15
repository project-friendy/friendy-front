import S from './ProfileImage.styles';

interface ProfileImageProps {
  imageUrl: string;
}

export default function ProfileImage({
  imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25ED%2594%2584%25EB%25A1%259C%25ED%2595%2584%2520%25EC%2582%25AC%25EC%25A7%2584%2F%25EC%259D%25B8%25ED%2584%25B0%25EB%2584%25B7&psig=AOvVaw3kHZI_6WGgXwJKBMeq8EjQ&ust=1734327758487000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCc18OIqYoDFQAAAAAdAAAAABAE',
}: ProfileImageProps) {
  return (
    <S.ProfileImage
      source={{
        uri: imageUrl,
      }}
      resizeMode='cover'
    />
  );
}
