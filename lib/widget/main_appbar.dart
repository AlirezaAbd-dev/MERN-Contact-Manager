import 'package:flutter/material.dart';
import 'package:contactmanager/colors/colors.dart';

class ContactManagerAppbar extends StatelessWidget
    implements PreferredSizeWidget {
  final Widget? title;
  final Color? backgroundColor;
  final bool centerTitle;
  final MainAxisAlignment mainAxisAlignment;
  final double? prefferedWidth;

  const ContactManagerAppbar({
    Key? key,
    this.title,
    this.backgroundColor,
    required this.centerTitle,
    required this.mainAxisAlignment,
    required this.prefferedWidth,
  }) : super(key: key);

  @override
  Size get preferredSize => const Size.fromHeight(60.0);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: currentline,
      title: Row(
        mainAxisAlignment: mainAxisAlignment,
        textDirection: TextDirection.rtl,
        children: <Widget>[
          SizedBox(
            width: prefferedWidth,
          ),
          const Icon(
            Icons.person,
            color: purple,
          ),
          const SizedBox(
            width: 5.0,
          ),
          const Text(
            'اپلیکیشن مدیریت',
          ),
          const SizedBox(
            width: 5.0,
          ),
          const Text(
            'مخاطبین',
            style: TextStyle(
              color: purple,
              fontWeight: FontWeight.bold,
            ),
          ),
          // Search Bar Here
        ],
      ),
    );
  }
}
