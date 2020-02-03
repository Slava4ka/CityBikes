import React from 'react'
import { MyStation } from '../../store/stations/types'
import style from './Stations.module.scss'
import { ListGroup } from 'react-bootstrap'
import MySpinner from '../common/MySpinner/MySpinner'

interface StationsProps {
  stationsLoading: boolean
  stations: MyStation[]
  stationsError?: string
  currentNetwork: string
}

const Stations: React.FC<StationsProps> = (props: StationsProps) => {
  const { stationsLoading, stations, stationsError, currentNetwork } = props
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
              <span className={style.bold}>Название выбранной сети:</span> {currentNetwork}
            </div>
            <div>
              <span className={style.bold}>Общее количество станции в выбранной сети:</span> {stations.length}
            </div>
          </div>
          {stations.length > 0 ? (
            <div className={style.stationsBox__list}>
              <ListGroup>
                {stations.map((st, index) => (
                  <ListGroup.Item key={index.toString() + st.id}>
                    {st.name}
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
