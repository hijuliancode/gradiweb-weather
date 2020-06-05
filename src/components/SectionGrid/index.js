import React from 'react'
import styled from 'styled-components'

// Components
import AddLocation from '../AddLocation'
import Forecast from '../Forecast'
import Location from '../Location'
import Places from '../Places'
import Reviewers from '../Reviewers'

const Grid = styled.div`
  grid-column-gap: 40px;
  width: 100%;
  @media screen and (${props => props.theme.mq.md}) {
    display: grid;
    grid-template-areas:
      'area_forecast area_forecast'
      'area_locations area_places'
    ;
  }
  @media screen and (${props => props.theme.mq.lg}) {
    grid-template-areas:
      'area_forecast area_places area_locations'
    ;
  }
  p { margin-top: 0; }
`
const AreaForecast = styled.div`
  grid-area: area_forecast;
  /* padding: 0 ${props => props.theme.baseSize * 4}px 0 0; */
`
const AreaPlaces = styled.div`
  grid-area: area_places;
`
const AreaLocations = styled.div`
  grid-area: area_locations;
`
const AreaTitle = styled.h2`
  font-weight: 300;
  margin: 0 0 2rem;
  span {
    font-weight: 600;
  }
`

const SectionGridComponent = (props) => {
  return (
    <Grid>
      <AreaForecast>
        <AreaTitle>
          <span>3 Days</span> Forecast
        </AreaTitle>
        <Forecast />
        <Forecast />
        <Forecast />
      </AreaForecast>
      <AreaPlaces>
        <AreaTitle>
          <span>Place to</span> visit
        </AreaTitle>
        <Reviewers/>
        <Places/>
      </AreaPlaces>
      <AreaLocations>
        <Location/>
        <AddLocation/>
      </AreaLocations>
    </Grid>
  )
}

export default SectionGridComponent
