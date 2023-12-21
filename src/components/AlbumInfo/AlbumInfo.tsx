import { AlbumInfoProps } from "album-types";

export default function AlbumInfo({
  Rank,
  Album,
  Info,
  Artist,
  Description,
}: AlbumInfoProps) {
  return (
    <div>
      <h1>{Rank}</h1>
      <h1>{Album}</h1>
      <p>{Info}</p>
      <p>{Artist}</p>
      <p>{Description}</p>
    </div>
  );
}
