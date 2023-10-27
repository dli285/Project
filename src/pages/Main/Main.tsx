import { Navbar } from "../../components/Navbar/Navbar";
import { ToggleSwitch } from "../../components/ToggleSwitch/ToggleSwitch";
import './Main.scss'
import { useGetTopCitiesQuery } from "../../store/api/baseApi";
import { TravelCard } from "../../components/TravelCard/TravelCard";
import { Loader } from "../../components/Wait or Error/Loader";
   
export interface RootObject {
    data?:     Datum[];
    links?:    Link[];
   }
   
   export interface Datum {
    country?:     string;
    countryCode?: string;
    id?:          number;
    latitude?:    number;
    longitude?:   number;
    name?:        string;
    population?:  number;
    region?:      string;
    regionCode?:  string;
    regionWdId?:  string;
    wikiDataId?:  string;
   }
   
   export interface Link {
    href: string;
    rel:  string;
   }

export const MainPage = () => {
    const { data, isFetching, error} = useGetTopCitiesQuery({})

    console.log(data)

    if (isFetching) return <Loader/>

    
    return(
        <div>
            <div className="toggle">
                <ToggleSwitch/>
            </div>
            <Navbar/>
            <div className="TravelInfos">
                {data?.map(() => {
                    <TravelCard
                        name={name}
                        country={country}
                        href={href}
                    />
                })}
            </div>
        </div>
    )
}