** В основном пишу на SWIFT, поэтому тестировал на IOS, т.к все под IOS уже было настроено, на андроид протестировать не успел. **

Построил простую удобную архитектуру, поразбивал большую часть кода на модули, повыносил стринги в енумы и тд. Можно и дальше рефакторить, выносить все в отдельные компоненты, но к сожалению уже не было времени. Архитектура есть, понятная, и простая.

# TransportCo

#### Custom Checkbox

#### Custom Marker (one per each vehicle type)

#### Custom Text Component \*\* ({size}) => <Text/>

#### Custom Divider

#### Common Drivers Info Component

### STRUCTURE

#### Two Views - Transport + Settings

#### Settings - user able to change localisation by toggling switch

#### Transport

1. NavigationStack: List and TransportVehicleNav.
2. List - (TransparentOpacity) buttons for each vehicle that leads to
3. NavigationStack with Two Screens - TransportMap + TransportInfo
4. NavigationMap shows Map with Markers and allows to switch vehicle type on "OK" - if no checkbox is selected, then it shows all transports (press OK).
5. Markers are clickable - it changes View From Map to Info.

6. Info consists of 3 Components

a. Map (to show current location of the driver)
b. Short Info about the driver.
c. BtnHub - Two buttons that allow to call || message user in whatsapp.
