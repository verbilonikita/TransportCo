** В основном пишу на SWIFT, поэтому тестировал на IOS, т.к все под IOS уже было настроено, на андроид протестировать не успел. **

Построил простую удобную архитектуру, поразбивал большую часть кода на модули, повыносил стринги в енумы и тд. Можно и дальше рефакторить, выносить все в отдельные компоненты, но к сожалению уже не было времени. :)

-- сделать: оптимизацию (memo, useCallback, useMemo - сейчас не все протестировано на 100%), разбить стили на модули, проверить нейминги и хардкод стринг, разбить локализацию на мелкие объекты, проверить неиспользуемые зависимости, разбить импорты на категории, вынести больше компонентов в src/components (common).

# TransportCo

### STRUCTURE - two Views "Transport" and "Settings", tabs

#### Settings - user able to change localisation by toggling switch

#### Transport

1. NavigationStack: "TransportVehicleTab" and "Info".

##### TransportStackView

1. TransportVehicleTab with Two Tabs - TransportMap + TransportList
2. TransportList - clickable elements with vehicle (driver) description
3. TransportMap - map with markers, displays current location of driver. Markers are clickable.
4. Both clickable elements lead to "Info" page

##### Info

1. Displays map with current location of driver.
2. Provides info about driver.
3. Two buttons - call and whatsapp message.
