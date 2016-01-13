#jar ufm everything manifest.txt
echo "Adding manifest to the following jars:"
cd ApachePOI
echo "    commons-codec-1.9.jar"
jar ufm commons-codec-1.9.jar ../manifest.txt
echo "    commons-logging-1.1.3.jar"
jar ufm commons-logging-1.1.3.jar ../manifest.txt
echo "    junit-4.12.jar"
jar ufm junit-4.12.jar ../manifest.txt
echo "    log4j-1.2.17.jar"
jar ufm log4j-1.2.17.jar ../manifest.txt
echo "    ooxml-schemas.jar"
jar ufm ooxml-schemas.jar ../manifest.txt
echo "    ooxml.jar"
jar ufm ooxml.jar ../manifest.txt
echo "    POI.jar"
jar ufm POI.jar ../manifest.txt
echo "    saxon8-dom.jar"
jar ufm saxon8-dom.jar ../manifest.txt
echo "    saxon8-jdom.jar"
jar ufm saxon8-jdom.jar ../manifest.txt
echo "    saxon8-sql.jar"
jar ufm saxon8-sql.jar ../manifest.txt
echo "    saxon8-xom.jar"
jar ufm saxon8-xom.jar ../manifest.txt
echo "    saxon8-xpath.jar"
jar ufm saxon8-xpath.jar ../manifest.txt
echo "    saxon8.jar"
jar ufm saxon8.jar ../manifest.txt
echo "    xmlbeans.jar"
jar ufm xmlbeans.jar ../manifest.txt
cd ../Excel_IPs
echo "    Excel_IPs_JWS.jar"
jar ufm Excel_IPs_JWS.jar ../manifest.txt
cd ..
echo "Done. Now signing as alexstrong:"
cd ApachePOI
echo "commons-codec-1.9.jar"
jarsigner commons-codec-1.9.jar alexstrong
echo "commons-logging-1.1.3.jar"
jarsigner commons-logging-1.1.3.jar alexstrong
echo "junit-4.12.jar"
jarsigner junit-4.12.jar alexstrong
echo "log4j-1.2.17.jar"
jarsigner log4j-1.2.17.jar alexstrong
echo "ooxml-schemas.jar"
jarsigner ooxml-schemas.jar alexstrong
echo "ooxml.jar"
jarsigner ooxml.jar alexstrong
echo "POI.jar"
jarsigner POI.jar alexstrong
echo "saxon8-dom.jar"
jarsigner saxon8-dom.jar alexstrong
echo "saxon8-jdom.jar"
jarsigner saxon8-jdom.jar alexstrong
echo "saxon8-sql.jar"
jarsigner saxon8-sql.jar alexstrong
echo "saxon8-xom.jar"
jarsigner saxon8-xom.jar alexstrong
echo "saxon8-xpath.jar"
jarsigner saxon8-xpath.jar alexstrong
echo "saxon8.jar"
jarsigner saxon8.jar alexstrong
echo "xmlbeans.jar"
jarsigner xmlbeans.jar alexstrong
cd ../Excel_IPs
echo "Excel_IPs_JWS.jar"
jarsigner Excel_IPs_JWS.jar alexstrong
cd ..
echo "Done."