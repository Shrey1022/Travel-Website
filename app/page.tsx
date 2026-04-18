import Hero from "./sections/main";
import SearchBar from "./sections/searchbar";
import Story from "./sections/story";
import PopularTours from "./sections/populartours";

export default function Home() {
  return (
    <main className="w-full bg-white overflow-x-hidden">
      <Hero />
      <SearchBar />
      <Story />
      <PopularTours />
    </main>
  );
}