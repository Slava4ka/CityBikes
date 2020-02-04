import React from 'react'
import { Favorite, MyStation } from '../../store/stations/types'
import style from './Stations.module.scss'
import { ListGroup } from 'react-bootstrap'
import MySpinner from '../common/MySpinner/MySpinner'
import { FaHeart } from 'react-icons/fa'
import { changeFavorite } from '../../store/stations/actions'
import { findF } from '../../utils/reducersTransformations'

interface StationsProps {
  stationsLoading: boolean
  stations: MyStation[]
  stationsError?: string
  currentNetwork: string
  stationsFavorite: Favorite[]
  changeFavorite: typeof changeFavorite
}

const Stations: React.FC<StationsProps> = (props: StationsProps) => {
  const {
    stationsLoading,
    stations,
    stationsError,
    currentNetwork,
    stationsFavorite,
    changeFavorite
  } = props

  const favoriteCheck = (name: string, stationId: string): boolean => {
    return findF(stationsFavorite, { name, stationId })
  }
  return (
    <div className={`${style.stationsBox}`}>
      {stationsLoading ? (
        <MySpinner />
      ) : stationsError ? (
        <div>{stationsError}</div>
      ) : (
        <div>
          <div className={style.stationsBox__info}>
            <div>
              <span className={style.bold}>Название выбранной сети:</span>{' '}
              {currentNetwork}
            </div>
            <div>
              <span className={style.bold}>
                Общее количество станции в выбранной сети:
              </span>{' '}
              {stations.length}
            </div>
          </div>
          {stations.length > 0 ? (
            <div className={style.stationsBox__list}>
              <ListGroup>
                {stations.map((st, index) => (
                  <ListGroup.Item key={index.toString() + st.id}>
                    <div className={style.stationsBox__listItem}>
                      {st.name}
                      <span
                        className={`${style.heart} ${
                          favoriteCheck(st.name, st.stationId)
                            ? style.heart_active
                            : ''
                        }`}
                      >
                        <FaHeart
                          size={'1.3em'}
                          onClick={() =>
                            changeFavorite({
                              name: st.name,
                              stationId: st.stationId
                            })
                          }
                        />
                      </span>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          ) : (
            <div className={style.stationsBox__emptyList}>
              <h2>Список станций пуст</h2>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Stations
