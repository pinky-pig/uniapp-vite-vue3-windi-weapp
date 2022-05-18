type MarkerType = {
  id: number,
  latitude: number,
  longitude: number,
  iconPath: string,
  callout: object,
}
const markers: Array<MarkerType> = [{
  id: 1,
  latitude: 23.098994,
  longitude: 113.322520,
  iconPath: '../../../static/images/map/marker.png',
  callout: {
    content: '文本内容',
    color: '#ff0000',
    fontSize: 14,
    borderWidth: 0,
    borderRadius: 10,
    borderColor: '#000000',
    bgColor: '#fff',
    padding: 5,
    display: 'ALWAYS',
    textAlign: 'center'
  },
}]

export const getMarkers = () => ({
  markers,
});
