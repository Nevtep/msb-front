
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';


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



const RolesSelect = ({classes}) => (<FormControl className={classes.formControl}>
  <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
  <Select
    labelId="demo-mutiple-chip-label"
    id="demo-mutiple-chip"
    multiple
    value={personName}
    onChange={handleChange}
    input={<Input id="select-multiple-chip" />}
    renderValue={(selected) => (
      <div className={classes.chips}>
        {selected.map((value) => (
          <Chip key={value} label={value} className={classes.chip} />
        ))}
      </div>
    )}
    MenuProps={MenuProps}
  >
    {names.map((name) => (
      <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
        {name}
      </MenuItem>
    ))}
  </Select>
  </FormControl>)