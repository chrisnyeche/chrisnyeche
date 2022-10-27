import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PageLoader from "./components/PageLoader";
import NoPage from "./components/NoPage";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Create = lazy(() => import("./pages/Create"));
const Connect = lazy(() => import("./pages/Connect"));
const Community = lazy(() => import("./pages/Community"));

const App = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<PageLoader/>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="create"
        element={
          <Suspense fallback={<PageLoader />}>
            <Create />
          </Suspense>
        }
      />
      <Route
        path="connect"
        element={
          <Suspense fallback={<PageLoader />}>
            <Connect />
          </Suspense>
        }
      />
      <Route
        path="community"
        element={
          <Suspense fallback={<PageLoader />}>
            <Community />
          </Suspense>
        }
      />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;



// ISAIAH 60
// Zion's future glory
// 1 Stand up! Shine brightly!
// Now your light has come! 
// The Lord's glory has risen to shine on you.
// 2 Look! Darkness covers all the earth and its people.
// But the Lord shines his light on you,
// so that his glory appears over you.
// 3 People of other nations will come to your light.
// Kings will come to see the light of a new day that shines on you.
// 4 Look all round you!
// All your people are coming together to return to you.
// Your sons are coming from far away,
// and they carry your daughters in their arms.
// 5 As you see this, your eyes will shine with joy.
// Your hearts will beat fast,
// and you will be proud to see them.
// Traders will bring valuable things to you
// from lands across the seas.
// The riches of other nations will come to you.
// 6 Traders will bring things on their camels
// so that your roads are full.
// Young camels will come from Midian
// and from Ephah.
// People will come from Sheba.
// They will bring gold and incense.
// They will sing aloud to praise the Lord.
// 7 All the sheep and goats in Kedar will come to you.
// They will give you sheep from Nebaioth,
// and I will accept them as sacrifices on my altar.
// I will make my temple great and beautiful.
// 8 See those ships that sail along like clouds!
// They come like doves that are flying to their homes.
// 9 People from lands across the seas are coming to find me.
// Their big ships are leading them.
// They are bringing your children from far away,
// as well as silver and gold.
// They come to give honour to the name of the Lord your God.
// He is Israel's Holy God.
// They come here because he has shown that you are great.
// 10 Foreign people will build your walls again.
// Their kings will be your servants.
// I punished you when I was angry with you.
// But now I will show my grace
// and I will be kind to you.
// 11 The gates of your city will always be open.
// People will never close them,
// during the day or during the night.
// Then other nations will bring their riches to you,
// and their kings will lead them.
// 12 Any nation or kingdom that refuses to serve you
// will come to an end.
// Enemies will completely destroy those nations.
// 13 The beautiful things of Lebanon will come to you.
// They will bring you its pine trees,
// its fir trees and its cypress trees.
// The wood will make my temple beautiful.
// I will cause my home on earth to be great!
// 14 The descendants of your cruel enemies will come to you.
// They will bend down low in front of you.
// Everybody who insulted you before
// will now give you honour.
// They will call you, ‘The City of the Lord,
// Zion that is home for Israel's Holy God.’
// 15 At one time, people kept away from you,
// and they hated you.
// Nobody travelled through you.
// But now I will make you a great city,
// so that people will be proud of you for ever.
// Your people and their descendants will be very happy.
// 16 Other nations and their kings
// will give you everything that you need.
// They will be like mothers
// who feed their babies with their milk.
// Then you will know that I, the Lord,
// have made you safe.
// You will know that I am your Redeemer,
// the Mighty One of Jacob.
// 17 I will bring you gold instead of bronze.
// I will bring you silver instead of iron.
// I will give you bronze to use, instead of wood.
// I will give you iron instead of stones.
// I will cause peace to be your city's leader.
// Righteousness will rule over you.
// 18 You will not hear the noise of violence in your land any more.
// Inside its borders,
// nobody will fight wars or destroy things.
// You will call your city's walls ‘Salvation’,
// and you will call your city's gates ‘Praise’.
// 19 You will no longer need the sun
// to give you light in the day again.
// You will not need the moon to shine at night.
// Instead, the Lord will be the light
// that shines on you for ever.
// Yes, your God will be the light
// that brings you honour.
// 20 Your sun will never go down again
// and your moon will never disappear.
// That is because the Lord will be the light
// that shines on you for ever.
// Then your sad days will come to an end.
// 21 All your people will be righteous.
// The land will belong to them for ever.
// I myself will plant them in the ground
// like a young plant.
// As they grow, they will show how great I am.
// 22 The least important person among you
// will become a great family.
// The smallest person will become a large nation.
// I am the Lord.
// When the right time comes,
// I will cause it to happen quickly!