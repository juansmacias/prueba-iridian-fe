import React from 'react'
import { ButtonBase, Typography } from '@mui/material'

interface CustomSelectionButtonProps {
  title: string
  subtitle: string
  selected:boolean
  onClick: () => void
}
const CustomSelectionButton: React.FC<CustomSelectionButtonProps> = ({ title, subtitle, selected, onClick }) => {
  return (
    <ButtonBase onClick={onClick} 
    sx={{border:1, p:2,
    width:'11em',
    height:'7em',
    backgroundColor:selected?'green':'unset',
    color:selected?'white':'unset'
    }}>
      <div>
        <Typography variant="body1" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1" component="div">
          {subtitle}
        </Typography>
      </div>
    </ButtonBase>
  )
}

export default CustomSelectionButton
