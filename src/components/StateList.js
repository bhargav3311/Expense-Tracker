import React, { useState, useEffect } from "react"
import countries from './Countries'
import { Grid } from "@material-ui/core"





const StateList = () => {

    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedState, setSelectedState] = useState();



    const changeCountry = event => {
        setSelectedCountry(countries.find(c => c.name === event.target.value));

        // reset state and lga when country changes
        setSelectedState(null);

    };

    const changeState = event => {
        setSelectedState(
            selectedCountry.states.find(s => s.name === event.target.value)
        );

    };


    const states = selectedCountry ? selectedCountry.states : [];

    return (
        <Grid>
            <Grid items xs={12} sm={6}>

                <label>Country</label>
                <select
                    placeholder="Country"
                    value={selectedCountry ? selectedCountry.name : ""}
                    onChange={changeCountry}
                >
                    <option>--Choose Country--</option>
                    {countries.map((country, key) => {
                        return (
                            <option value={country.name} key={key}>
                                {country.name}
                            </option>
                        );
                    })}
                </select>
            </Grid>

            <Grid items xs={12} sm={6}>

                <label>State</label>
                <select
                    placeholder="State"
                    value={selectedState ? selectedState.name : ""}
                    onChange={changeState}
                >
                    <option>--Choose State--</option>
                    {states.map((state, key) => {
                        return (
                            <option value={state.name} key={key}>
                                {state.name}
                            </option>
                        );
                    })}
                </select>
            </Grid>

            {/* <Grid items xs={12} sm={6}>

                <label>LGA</label>
                <select
                    placeholder="LGA"
                    value={selectedLga ? selectedLga.name : ""}
                    onChange={changeLga}
                >
                    <option>--Choose LGA--</option>
                    {lgas.map((lga, key) => {
                        return (
                            <option value={lga.name} key={key}>
                                {lga.name}
                            </option>
                        );
                    })}
                </select>
            </Grid> */}
        </Grid>
    )
}


export default StateList