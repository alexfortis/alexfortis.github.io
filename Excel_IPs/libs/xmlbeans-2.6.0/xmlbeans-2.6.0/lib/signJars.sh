echo "Signing jsr173_1.0_api.jar..."
jar ufm jsr173_1.0_api.jar ../../../../../manifest.txt
jarsigner jsr173_1.0_api.jar alexstrong
echo "Signing resolver.jar..."
jar ufm resolver.jar ../../../../../manifest.txt
jarsigner resolver.jar alexstrong
echo "Signing xbean.jar..."
jar ufm xbean.jar ../../../../../manifest.txt
jarsigner xbean.jar alexstrong
echo "Signing xbean_xpath.jar..."
jar ufm xbean_xpath.jar ../../../../../manifest.txt
jarsigner xbean_xpath.jar alexstrong
echo "Signing xmlbeans-qname.jar..."
jar ufm xmlbeans-qname.jar ../../../../../manifest.txt
jarsigner xmlbeans-qname.jar alexstrong
echo "Signing xmlpublic.jar..."
jar ufm xmlpublic.jar ../../../../../manifest.txt
jarsigner xmlpublic.jar alexstrong
echo "Done."
