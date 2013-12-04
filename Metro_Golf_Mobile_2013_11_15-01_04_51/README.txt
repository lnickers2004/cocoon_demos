
                               H               H
                            H .#. H         H .#. H
                         H .#######. H   H .#######. H
                      H .#############. .#############. H
                      H ¶¶¶#########################HHH H
                      H ¶¶¶¶¶#####################HHHHH H
                      H ¶¶¶¶¶¶¶#################HHHHHHH H
                      H ¶¶¶¶¶¶¶¶¶¶###########HHHHHHHHHH H
                        H "¶¶¶¶¶¶¶¶¶¶¶##HHHHHHHHHHH"  H
                           H "¶¶¶¶¶¶¶¶¶HHHHHHHHH"  H
                              H  "¶¶¶¶¶HHHHHH"  H
                                 H  "¶¶HHH"  H
                                    H  "  H
                                       H
                   __                     __             __
                  |  |                   |  |           |__|
                  |  | .––.  .––.  .–––––|  | .–––––––. .––.    
                  |  | |  |  |  | /  ____   |/  ,––––, \|  |
                  |  | |  |  |  ||  |    |  ||  '––––' ||  |
                  |  | |  '––'  ||  |    |  ||  ,––––-´ |  |
                  |  '–.\_______/|  '––––'  ||  '''''''\|  |
                  \____/          '–––––––––' \--------''––'


          –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
          Thank you for using the CocoonJS Cloud Compilation service!
          –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––



Along this README you will find several files, depending on what configuration
options you selected on our website.


                           ------------------------
                            == iOS Compilations ==
                           ------------------------

If you requested an iOS compilation, you will find here an XCode project as a 
file ending in ".xcodeproj". To upload this compilation to your device, just 
open it in XCode and run it in your device. 

Please check that the device emulator is not selected as the active platform, 
as our compiler only creates builds for the ARM platform, which will fail to 
run in the iOS emulator.

Also, remember that XCode will not let you execute any programs without a valid
provisioning profile, with a wrong app bundleID, or in a device not added to 
the provisioning profile you have selected


                         ----------------------------
                          == Android Compilations ==
                         ----------------------------

If you requested an Android compilation, you will find here two APK files. One 
of them will end in "_debug_signed.apk", and the other one in 
"_release_unsigned.apk". Both files contain the same compilation files, and the
only difference is in the signing process. As their name suggests, the Release 
APK is unsigned, while the Debug APK is signed with a debug key. 

This means that you can upload the Debug APK directly to your device, but you 
won't be able to submit it to the Play Store. On the other hand, you can't 
upload the Release APK to any device until you sign it yourself, but after
that you should be able to upload it to the Play Store without trouble.


If you have any trouble with your compilation, please drop us a line at 
devsupport@ludei.com and we'll do our best to help you out.


    Kind regards,

       The ludei team  

