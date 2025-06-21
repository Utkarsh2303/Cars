import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeroSection from './HeroSection'
import Type from './components/Type'
import CarBuyingGuidePage from './components/Guide'
import SportsCarPage from './components/Description/Sports'
import HatchbackPage from './components/Description/Choti'
import SedanPage from './components/Description/Sedans'
import SUVPage from './components/Description/SUV'
import ElectricVehiclePage from './components/Description/EV'
import ConvertiblePage from './components/Description/convertible'
import CoupesPage from './components/Description/Coupe'
import StationWagonPage from './components/Description/Wagons'
import CrossoverCarPage from './components/Description/Crossover'
import LuxuryCarPage from './components/Description/Luxury'
import PickupTruckPage from './components/Description/Pickup'
import MinivanPage from './components/Description/Minivan'
import MicrocarPage from './components/Description/MIcrocar'
import RoadsterPage from './components/Description/Roadster'
import MuscleCarPage from './components/Description/Muscle'
import OffRoadVehiclesPage from './components/Description/Off'
import DieselCarPage from './components/Description/Diesel'
import HybridCarPage from './components/Description/Hybrid'
import TaxiCarPage from './components/Description/Taxi'
import LimousineCarPage from './components/Description/Limo'
import SuperCarPage from './components/Description/Supercar'
import ElectricSUVPage from './components/Description/Esuv'
import CityCarPage from './components/Description/City'
import FamilyCarPage from './components/Description/Family'
import GrandTourerPage from './components/Description/Grand'
import FormulaCarPage from './components/Description/Formula'
import PickupSuvPage from './components/Description/Pickupsuv'
import ElectricHatchbackPage from './components/Description/Evchoti'
import ElectricSedanPage from './components/Description/Esedan'
import CommercialVehiclePage from './components/Description/Commercial'
import EvolutionOfCarsPage from './components/Evolution'
import CarBrandCards from './components/Brands'
import MarutiSuzukiPage from './components/Brands/Maruti'
import HyundaiPage from './components/Brands/Hyundai'
import TataPage from './components/Brands/Tata'
import MahindraPage from './components/Brands/Mahindra'
import HondaPage from './components/Brands/Honda'
import RenaultPage from './components/Brands/Renault'
import NissanPage from './components/Brands/Nissan'
import KiaPage from './components/Brands/Kia'
import ToyotaPage from './components/Brands/Toyota'
import BMWPage from './components/Brands/BMW'
import MercedesBenzPage from './components/Brands/Benz'
import AudiPage from './components/Brands/Audi'
import LexusPage from './components/Brands/Lexus'
import VolvoPage from './components/Brands/Volvo'
import JaguarPage from './components/Brands/Jaguar'
import PorschePage from './components/Brands/Porsche'
import MaseratiPage from './components/Brands/Maserati'
import TeslaPage from './components/Brands/Tesla'
import BYDPage from './components/Brands/BYD'
import MGElectricPage from './components/Brands/Mgev'
import KiaEVPage from './components/Brands/KiaEV'
import OlaElectricPage from './components/Brands/Ola'
import AtherEVPage from './components/Brands/Ather'
import AshokLeylandPage from './components/Brands/Ashok'
import TataCommercialVehiclesPage from './components/Brands/Tatacomm'
import EicherCommercialVehiclesPage from './components/Brands/Eicher'
import BharatBenzCommercialVehiclesPage from './components/Brands/Bharatbenz'
import LamborghiniPage from './components/Brands/Lambo'
import FerrariPage from './components/Brands/Ferrari'
import McLarenPage from './components/Brands/Mclaren'
import BugattiPage from './components/Brands/Buggati'
import KoenigseggPage from './components/Brands/Koenigsegg'
import PaganiPage from './components/Brands/Pagani'
import SurpriseButton from './components/SurpriseButton'




export default function App() {
  return (


  <>
    <Routes>
      <Route path='/' element={<HeroSection></HeroSection>}></Route>
      <Route path='/Brand' element={<CarBrandCards></CarBrandCards>}></Route>
      
      <Route path='/service-types' element={<Type></Type>}></Route>
      <Route path='/Evolution' element={<EvolutionOfCarsPage></EvolutionOfCarsPage>}></Route>
      <Route path='/car-buying-guide' element={<CarBuyingGuidePage></CarBuyingGuidePage>}></Route>
      <Route path='/Sportcars' element={<SportsCarPage></SportsCarPage>}></Route>
      <Route path='/Hatchback' element={<HatchbackPage></HatchbackPage>}></Route>
      <Route path='/Sedan' element={<SedanPage></SedanPage>}></Route>
      <Route path='/Suv' element={<SUVPage></SUVPage>}></Route>
      <Route path='/Electric' element={<ElectricVehiclePage></ElectricVehiclePage>}></Route>
      <Route path='/Convertible' element={<ConvertiblePage></ConvertiblePage>}></Route>
      <Route path='/Coupe' element={<CoupesPage></CoupesPage>}></Route>
      <Route path='/Wagon' element={<StationWagonPage></StationWagonPage>}></Route>
      <Route path='/Crossover' element={<CrossoverCarPage></CrossoverCarPage>}></Route>
      <Route path='/Luxury' element={<LuxuryCarPage></LuxuryCarPage>}></Route>
      <Route path='/Pickup' element={<PickupTruckPage></PickupTruckPage>}></Route>
      <Route path='/Minivan' element={<MinivanPage></MinivanPage>}></Route>
      <Route path='/Micro' element={<MicrocarPage></MicrocarPage>}></Route>
      <Route path='/Roadster' element={<RoadsterPage></RoadsterPage>}></Route>
      <Route path='/Muscle' element={<MuscleCarPage></MuscleCarPage>}></Route>
      <Route path='/Off' element={<OffRoadVehiclesPage></OffRoadVehiclesPage>}></Route>
      <Route path='/Diesel' element={<DieselCarPage></DieselCarPage>}></Route>
      <Route path='/Hybrid' element={<HybridCarPage></HybridCarPage>}></Route>
      <Route path='/Taxi' element={<TaxiCarPage></TaxiCarPage>}></Route>
      <Route path='/Limo' element={<LimousineCarPage></LimousineCarPage>}></Route>
      <Route path='/Super' element={<SuperCarPage></SuperCarPage>}></Route>
      <Route path='/Esuv' element={<ElectricSUVPage></ElectricSUVPage>}></Route>
      <Route path='/City' element={<CityCarPage></CityCarPage>}></Route>
      <Route path='/Family' element={<FamilyCarPage></FamilyCarPage>}></Route>
      <Route path='/Grand' element={<GrandTourerPage></GrandTourerPage>}></Route>
      <Route path='/Formula' element={<FormulaCarPage></FormulaCarPage>}></Route>
      <Route path='/Pisuv' element={<PickupSuvPage></PickupSuvPage>}></Route>
      <Route path='/EVh' element={<ElectricHatchbackPage></ElectricHatchbackPage>}></Route>
      <Route path='/Esed' element={<ElectricSedanPage></ElectricSedanPage>}></Route>
      <Route path='/Comm' element={<CommercialVehiclePage></CommercialVehiclePage>}></Route>
      <Route path='/Maruti' element={<MarutiSuzukiPage></MarutiSuzukiPage>}></Route>
      <Route path='/Hyundai' element={<HyundaiPage></HyundaiPage>}></Route>
      <Route path='/Tata' element={<TataPage></TataPage>}></Route>
      <Route path='/Mahindra' element={<MahindraPage></MahindraPage>}></Route>
      <Route path='/Honda' element={<HondaPage></HondaPage>}></Route>
      <Route path='/Renault' element={<RenaultPage></RenaultPage>}></Route>
      <Route path='/Nissan' element={<NissanPage></NissanPage>}></Route>
      <Route path='/Kia' element={<KiaPage></KiaPage>}></Route>
      <Route path='/Toyota' element={<ToyotaPage></ToyotaPage>}></Route>
      <Route path='/BMW' element={<BMWPage></BMWPage>}></Route>
      <Route path='/Benz' element={<MercedesBenzPage></MercedesBenzPage>}></Route>
      <Route path='/Audi' element={<AudiPage></AudiPage>}></Route>
      <Route path='/Lexus' element={<LexusPage></LexusPage>}></Route>
      <Route path='/Volvo' element={<VolvoPage></VolvoPage>}></Route>
      <Route path='/Jaguar' element={<JaguarPage></JaguarPage>}></Route>
      <Route path='/Porsche' element={<PorschePage></PorschePage>}></Route>
      <Route path='/Maserati' element={<MaseratiPage></MaseratiPage>}></Route>
      <Route path='/Tesla' element={<TeslaPage></TeslaPage>}></Route>
      <Route path='/BYD' element={<BYDPage></BYDPage>}></Route>
      <Route path='/MG' element={<MGElectricPage></MGElectricPage>}></Route>
      <Route path='/KiaEV' element={<KiaEVPage></KiaEVPage>}></Route>
      <Route path='/Ola' element={<OlaElectricPage></OlaElectricPage>}></Route>
      <Route path='/Ather' element={<AtherEVPage></AtherEVPage>}></Route>
      <Route path='/Ashok' element={<AshokLeylandPage></AshokLeylandPage>}></Route>
      <Route path='/CV' element={<TataCommercialVehiclesPage></TataCommercialVehiclesPage>}></Route>
      <Route path='/Eicher' element={<EicherCommercialVehiclesPage></EicherCommercialVehiclesPage>}></Route>
      <Route path='/Bharat' element={<BharatBenzCommercialVehiclesPage></BharatBenzCommercialVehiclesPage>}></Route>
      <Route path='/Lambo' element={<LamborghiniPage></LamborghiniPage>}></Route>
      <Route path='/Ferrari' element={<FerrariPage></FerrariPage>}></Route>
      <Route path='/Mclaren' element={<McLarenPage></McLarenPage>}></Route>
      <Route path='/Bugatti' element={<BugattiPage></BugattiPage>}></Route>
      <Route path='/Koenigsegg' element={<KoenigseggPage></KoenigseggPage>}></Route>
      <Route path='/Pagani' element={<PaganiPage></PaganiPage>}></Route>
      
    </Routes>
     
     <SurpriseButton/>
  </>


  )
}
