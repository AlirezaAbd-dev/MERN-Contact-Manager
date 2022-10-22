import 'package:flutter/material.dart';
import 'package:contactmanager/colors/colors.dart';
import 'package:contactmanager/pages/contacts.dart';
import 'package:contactmanager/widget/main_appbar.dart';
import 'package:contactmanager/constants/image_url.dart';

class CreateContact extends StatefulWidget {
  const CreateContact({super.key});

  @override
  State<CreateContact> createState() => _CreateContactState();
}

class _CreateContactState extends State<CreateContact> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: background,
      appBar: const ContactManagerAppbar(
        centerTitle: true,
        mainAxisAlignment: MainAxisAlignment.center,
        prefferedWidth: 40.0,
      ),
      body: SafeArea(
        child: Stack(
          children: <Widget>[
            Center(
              child: Column(
                children: <Widget>[
                  const SizedBox(
                    height: 15.0,
                  ),
                  const Text(
                    'ساخت مخاطب جدید',
                    style: TextStyle(
                      color: green,
                      fontSize: 25,
                      fontWeight: FontWeight.bold,
                      fontStyle: FontStyle.normal,
                    ),
                  ),
                  const SizedBox(
                    width: 950,
                    child: Divider(
                      height: 36.5,
                      color: green,
                      thickness: 0.5,
                    ),
                  ),
                  Row(
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.only(left: 80.0),
                        child: SizedBox(
                          height: 300,
                          width: 600,
                          child: Image.network(manImage),
                        ),
                      ),
                      const SizedBox(
                        width: 80.0,
                      ),
                      Column(
                        children: <Widget>[
                          const SizedBox(
                            width: 350,
                            height: 36.5,
                            child: TextField(
                              textAlign: TextAlign.right,
                              cursorColor: purple,
                              style: TextStyle(
                                color: white,
                                fontWeight: FontWeight.bold,
                              ),
                              decoration: InputDecoration(
                                enabledBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                    color: purple,
                                  ),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                    color: purple,
                                  ),
                                ),
                                fillColor: white,
                                hintText: 'نام و نام خانوادگی',
                                hintStyle: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 18,
                                  color: white,
                                ),
                                hintTextDirection: TextDirection.rtl,
                              ),
                            ),
                          ),
                          const SizedBox(
                            height: 5.0,
                          ),
                          const SizedBox(
                            width: 350,
                            height: 36.5,
                            child: TextField(
                              textAlign: TextAlign.right,
                              cursorColor: purple,
                              style: TextStyle(
                                color: white,
                                fontWeight: FontWeight.bold,
                              ),
                              decoration: InputDecoration(
                                enabledBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                    color: purple,
                                  ),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                    color: purple,
                                  ),
                                ),
                                fillColor: white,
                                hintText: 'آدرس تصویر',
                                hintStyle: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 18,
                                  color: white,
                                ),
                                hintTextDirection: TextDirection.rtl,
                              ),
                            ),
                          ),
                          const SizedBox(
                            height: 5.0,
                          ),
                          const SizedBox(
                            width: 350,
                            height: 36.5,
                            child: TextField(
                              textAlign: TextAlign.right,
                              cursorColor: purple,
                              style: TextStyle(
                                color: white,
                                fontWeight: FontWeight.bold,
                              ),
                              decoration: InputDecoration(
                                enabledBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                    color: purple,
                                  ),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                    color: purple,
                                  ),
                                ),
                                fillColor: white,
                                hintText: 'شماره موبایل',
                                hintStyle: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 18,
                                  color: white,
                                ),
                                hintTextDirection: TextDirection.rtl,
                              ),
                            ),
                          ),
                          const SizedBox(
                            height: 5.0,
                          ),
                          const SizedBox(
                            width: 350,
                            height: 36.5,
                            child: TextField(
                              textAlign: TextAlign.right,
                              cursorColor: purple,
                              style: TextStyle(
                                color: white,
                                fontWeight: FontWeight.bold,
                              ),
                              decoration: InputDecoration(
                                enabledBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                    color: purple,
                                  ),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                    color: purple,
                                  ),
                                ),
                                fillColor: white,
                                hintText: 'آدرس ایمیل',
                                hintStyle: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 18,
                                  color: white,
                                ),
                                hintTextDirection: TextDirection.rtl,
                              ),
                            ),
                          ),
                          const SizedBox(
                            height: 5.0,
                          ),
                          const SizedBox(
                            width: 350,
                            height: 36.5,
                            child: TextField(
                              textAlign: TextAlign.right,
                              cursorColor: purple,
                              style: TextStyle(
                                color: white,
                                fontWeight: FontWeight.bold,
                              ),
                              decoration: InputDecoration(
                                enabledBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                    color: purple,
                                  ),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                    color: purple,
                                  ),
                                ),
                                fillColor: white,
                                hintText: 'شغل',
                                hintStyle: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 18,
                                  color: white,
                                ),
                                hintTextDirection: TextDirection.rtl,
                              ),
                            ),
                          ),
                          const SizedBox(
                            height: 5.0,
                          ),
                          const SizedBox(
                            width: 350,
                            height: 36.5,
                            child: TextField(
                              textAlign: TextAlign.right,
                              cursorColor: purple,
                              style: TextStyle(
                                color: white,
                                fontWeight: FontWeight.bold,
                              ),
                              decoration: InputDecoration(
                                enabledBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                    color: purple,
                                  ),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                    color: purple,
                                  ),
                                ),
                                fillColor: white,
                                hintText: 'انتخاب گروه',
                                hintStyle: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 18,
                                  color: white,
                                ),
                                hintTextDirection: TextDirection.rtl,
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(
                              top: 8.0,
                              left: 35.0,
                            ),
                            child: Row(
                              children: <Widget>[
                                Container(
                                  width: 80,
                                  height: 45,
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(5),
                                    color: comment,
                                  ),
                                  child: Material(
                                    color: Colors.transparent,
                                    child: InkWell(
                                      borderRadius: BorderRadius.circular(5),
                                      onTap: () {
                                        Navigator.push(
                                          context,
                                          MaterialPageRoute(
                                            builder: (context) =>
                                                const Contacts(),
                                          ),
                                        );
                                      },
                                      child: const Center(
                                        child: Text(
                                          'انصراف',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 14,
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                                const SizedBox(
                                  width: 10.0,
                                ),
                                Container(
                                  width: 125,
                                  height: 45,
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(5),
                                    color: purple,
                                  ),
                                  child: Material(
                                    color: Colors.transparent,
                                    child: InkWell(
                                      borderRadius: BorderRadius.circular(5),
                                      onTap: () {},
                                      child: const Center(
                                        child: Text(
                                          'ساخت مخاطب',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 14,
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
