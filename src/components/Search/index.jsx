import { Input, InputAdornment } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { useFilterStore } from '../../store/useFilterStore'

export const Search = () => {
  const { search, setSearch } = useFilterStore()

  return (
    <Input
      sx={{
        background: 'white',
        borderRadius: '5px',
        padding: '0 5px',
      }}
      value={search}
      placeholder="Поиск по имени"
      onChange={(e) => setSearch(e.target.value)}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
    />
  )
}
