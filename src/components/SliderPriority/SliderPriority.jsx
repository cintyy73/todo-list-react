import { 
    Tooltip,
    Slider,
    SliderMark,
    SliderTrack,
    SliderFilledTrack, 
    SliderThumb,
  } from "@chakra-ui/react"
  import { useState } from 'react'
//import { setItemLS } from './utils/js/utils'

const SliderPriority = () =>{

    const [sliderValue, setSliderValue] = useState()
    const [showTooltip, setShowTooltip] = useState(false)
    return(
    <Slider
      borderColor='black'
      id='slider'
      defaultValue={1}
      min={0}
      max={2}
      colorScheme='red'
     
      onChange={(v) => {
        setSliderValue(v)
        // setItemLS('tasks',[...value.list, {
        //   ...list,
        //   priority:sliderValue
        //   }]
        // )
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      margin={1}
      
      gap={3} 
      width='20'
      padding={2}>
      <SliderMark value={0} fontSize='sm'>
        -
      </SliderMark>
      <SliderMark value={1}  fontSize='sm'>
        
      </SliderMark>
      <SliderMark value={2}  fontSize='sm'>
        +
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='blue'
        placement='top'
        isOpen={showTooltip}
        label={`Prioridad`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
    )
}
export default SliderPriority