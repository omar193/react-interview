import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select, OutlinedInput,Box, Chip } from "@mui/material"
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
const MultiSelect = (props: {
    options: Array<string>,
    value: Array<string>,
    onSelect: any
}) => {
    return (
        <FormControl  sx={{ m: 1, width: 400 }}>
            <InputLabel>Category</InputLabel>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={props.value}
                onChange={props.onSelect}
                input={<OutlinedInput label="Name" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
            >
                <MenuItem 
                    key="all" 
                    value="all" 
                >
                    All
                </MenuItem>
                {props.options.map((item) => (
                    <MenuItem 
                        key={item}
                        value={item}
                    >
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default MultiSelect

