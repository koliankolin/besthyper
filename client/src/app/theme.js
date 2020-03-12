import { createMuiTheme } from '@material-ui/core'
import yellow from '@material-ui/core/colors/yellow'
import amber from '@material-ui/core/colors/amber'
import red from '@material-ui/core/colors/red'

export function createHypertubeTheme () {
  return createMuiTheme({
    palette: {
      type: 'dark'
    }
  })
}