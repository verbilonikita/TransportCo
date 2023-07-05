** В основном пишу на SWIFT, поэтому тестировал на IOS, т.к все под IOS уже было настроено, на андроид протестировать не успел. **

Построил простую удобную архитектуру, поразбивал большую часть кода на модули, повыносил стринги в енумы и тд. Возможно что-то не заметил, времени было мало, но в целом все выглядит хорошо :)

# TransportCo

## Custom Checkbox

### Custom Marker (one per each vehicle type)

### Custom Text Component \*\* ({size}) => <Text/>

## STRUCTURE

## Two Views - Home + Settings

## Settings - change localisation using i18n

#### Home

1. NavigationStack with Two Screens - TransportMap + TransportInfo
2. NavigationMap shows Map with Markers and allows to switch vehicle type on "OK" - if no checkbox is selected, then it shows all transports (press OK).
3. Markers are clickable - it changes View From Map to Info.

4. Info consists of 3 Components

a. Map (to show current location of the driver)
b. Short Info about the driver.
c. BtnHub - Two buttons that allow to call || message user in whatsapp.
