# Projektdokumentation  
## Storytelling with Data: E-Fahrzeuge in den USA  

### Ziel  
Wir haben eine interaktive Webseite entwickelt, die die Verteilung von Fahrzeugtypen in den USA visualisiert, mit besonderem Fokus auf Elektrofahrzeuge. Im Mittelpunkt stehen ein **Balkendiagramm** und ein **Tortendiagramm**, die unterschiedliche Blickwinkel auf die Daten bieten und den Nutzer:innen erlauben, Unterschiede zwischen den Bundesstaaten zu erkunden.



### Arbeitsweise  
Wir haben im Pair-Programming gearbeitet und gemeinsam alle Schritte umgesetzt, die typisch für ein Projekt zur Datenvisualisierung sind:
- **Datenbeschaffung und -bereinigung**  
- **Datenanalyse und Berechnung zusätzlicher Kennzahlen**  
- **Gestaltung und Umsetzung der Visualisierungen mit D3.js**  
- **Aufbau der HTML-/CSS-Struktur der Webseite**  
- **Integration der Diagramme und Umsetzung der Interaktivität**  



### Umsetzung  

#### Datenaufbereitung  
- Die Daten wurden von der offiziellen Website des U.S. Department of Energy bezogen:  
  [https://afdc.energy.gov/vehicle-registration?year=2023](https://afdc.energy.gov/vehicle-registration?year=2023)  
- Die Rohdaten wurden in mehreren Schritten bereinigt:
  - Überflüssige Spalten entfernt  
  - Fahrzeugtypen zusammengefasst (z. B. „Gasoline“ und „Diesel“ zu „Combustion“)  
  - Fehlende Werte identifiziert und konsistent behandelt  
- Weitere Kennzahlen wurden berechnet:
  - Gesamtzahl der Fahrzeuge pro Bundesstaat  
  - Anteil der Elektrofahrzeuge absolut und relativ  
  - Verteilung der Fahrzeugtypen (für das Tortendiagramm)  
- Die fertigen Daten wurden als CSV-Datei exportiert und zur Verwendung in der Webseite vorbereitet.



#### Visualisierungen  

- **Balkendiagramm:**  
  - Zeigt die Anzahl der Elektrofahrzeuge pro Bundesstaat.  
  - Über ein Dropdown kann zwischen absoluten Zahlen und relativen Anteilen gewechselt werden.  
  - Der führende Bundesstaat wird farblich hervorgehoben.  
  - Tooltips zeigen beim Hover genaue Zahlen oder Prozentwerte.  

- **Tortendiagramm:**  
  - Stellt die Verteilung der Fahrzeugtypen (Electric, Hybrid, Alternative Fuels, Combustion, Unknown) pro ausgewähltem Bundesstaat dar.  
  - Ein Suchfeld ermöglicht die schnelle Auswahl eines Bundesstaats.  
  - Die Legende zeigt Zahlen und prozentuale Anteile an.  
  - Hover-Effekte vergrößern die Segmente und zeigen zusätzliche Details.



### Technische Umsetzung  
- Visualisierungen mit **D3.js (v5 für das Balkendiagramm, v7 für das Tortendiagramm)**.  
- Farbgestaltung mit **CSS-Variablen** für Konsistenz und einfache Anpassung.  
- Responsive Layout mit HTML/CSS.  
- Direkte Integration der Diagramme ins HTML zur Vereinfachung der Dateistruktur.  
- Nutzung von Tooltips und dynamischen Legenden zur Verbesserung der Nutzererfahrung.  


