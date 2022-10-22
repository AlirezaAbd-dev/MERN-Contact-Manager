import 'package:contactmanager/widget/main_appbar.dart';
import 'package:flutter/material.dart';
import 'package:contactmanager/colors/colors.dart';
import 'package:contactmanager/constants/image_url.dart';

class EditContacts extends StatefulWidget {
  const EditContacts({Key? key}) : super(key: key);

  @override
  State<EditContacts> createState() => _EditContactsState();
}

class _EditContactsState extends State<EditContacts> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const ContactManagerAppbar(
        centerTitle: true,
        mainAxisAlignment: MainAxisAlignment.center,
        prefferedWidth: 40.0,
      ),
      backgroundColor: background,
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
                    'ویرایش مخاطب',
                    style: TextStyle(
                      color: orange,
                      fontSize: 25,
                      fontWeight: FontWeight.bold,
                      fontStyle: FontStyle.normal,
                    ),
                  ),
                  const SizedBox(
                    width: 950,
                    child: Divider(
                      height: 36.5,
                      color: orange,
                      thickness: 0.5,
                    ),
                  ),
                  Container(
                    width: 750,
                    height: 290,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(5),
                      color: currentline,
                    ),
                    child: Stack(
                      children: <Widget>[
                        Padding(
                          padding: const EdgeInsets.only(right: 460.0),
                          child: Center(
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(5),
                              child: SizedBox(
                                width: 260,
                                height: 260,
                                child: Image.asset('assets/image.jpg'),
                              ),
                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(
                            left: 300.0,
                            top: 10.0,
                          ),
                          child: Column(
                            children: <Widget>[
                              const SizedBox(
                                width: 420,
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
                                height: 0.0,
                              ),
                              const SizedBox(
                                width: 420,
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
                                height: 0.0,
                              ),
                              const SizedBox(
                                width: 420,
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
                                height: 0.0,
                              ),
                              const SizedBox(
                                width: 420,
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
                                height: 0.0,
                              ),
                              const SizedBox(
                                width: 420,
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
                                height: 0.0,
                              ),
                              const SizedBox(
                                width: 420,
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
                                  left: 95.0,
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
                                          borderRadius:
                                              BorderRadius.circular(5),
                                          onTap: () {},
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
                                          borderRadius:
                                              BorderRadius.circular(5),
                                          onTap: () {},
                                          child: const Center(
                                            child: Text(
                                              'ویرایش مخاطب',
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
                        ),
                      ],
                    ),
                  ),
                  SizedBox(
                    height: 240,
                    width: 400,
                    child: Image.network(
                      manImage,
                    ),
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
